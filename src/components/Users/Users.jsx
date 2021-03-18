import React from 'react';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && 'currentPage'} onClick={() => { props.onPageChanged(p) }}>{`${p} `}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADy8vL8/Pz19fXt7e34+PgUFBTg4OCLi4uenp7l5eW2tralpaXFxcVoaGjQ0NBzc3PZ2dlNTU1VVVUsLCy7u7shISHJyckbGxtvb28ODg45OTmNjY3T09MzMzNGRkaDg4Otra2fn5+VlZVcXFwlJSVPT084ODh8fHxZWVmkcyHzAAATgElEQVR4nM1d6WKiMBBWDkURULyvKtTabd//AVflMJnMhCQE7fdrt2pgcsw9k16vU7ieH6Zxfpwli8NyvR3u+/3+frhdLw+LZHbM4zT0PbfbV+gQfhpHo2R+GvZpDE/zZBTFqf/ul9XGYDOezU9rCW0s1qf5bLwZvPulVeGFm+ysSBqPc7YJvXe/fhOcaT47GJFX4DDLp867iZAgiH6XLcgrsPyNgncTgsJLP9ssHo/DZ/rXtmu42l2t0XfHdbcK300Ug3A0l4kEMwznoz9Coxcn1qmrkMTv36z+ZNcZfXfsJm9WBlbfOttzf1PXljflba/xm+H36n3kOXmzZN8vz4tdNp7EH6EzcAsV1HUHTvgRT8bZbnFeNpN7zt8jIgerpvO3XNxImwYOrVq7TjC9EbpokqLJ6g0qXZhspS81H8WBr/ZeAz+IR3PpaNvk1Xw1yGRr93WM9ed8EB+/ZGuZvVLT8Sa0+rK+aZamLN67abW0PXKYvEx0BDOSgS6iluqWl0YLavDh7DXL6ETEC+wXFztvEFwWFIONXsBVpwQHXc8symZ/Qu3WZGrtIQRWBDOYMbvTddJVfkdsbtB66Qx/0LJbBSDAVbTDZ7V8ThBnc1aM3JY2NdxZPmGO7To8jVNUhzmPy0e6aZ4gS3xNcn1hlkafGzcc4w/sbKfmJ+Rx+8rGcePkHzrnt++cdTlEfL7PjH+zyzCec8rtE3eDg+3Q9bHcn35EkVdgONY4koOSXV/j28BHjOfsOuCpKcZDd3HxYRh9S+l7fDdVfZQzqn5z+Lj9N8amNlEeTRXYERyuypmMlbyHB1UuyHDRrwfFK0TDsH0YV+IjrqOSvg2phEAovZSfiD9xRogXyKbYcCPxLMw3hVHkjKVEnb6Tn9Hlcsx+Zsl8o/CskN+TJRnuRrQ91pG9iMdFZGhZyUEDiZG4TfJp4D8MX3cw8Bxf4Y3cL36MWs6EmTD+/mKJPm8kjH0oV8NFdm/1lZ+pwRSHgMAf5rONqACMrFgbjjh5s5KRDT4pI+MUGfG6EOwI3u5FFLnMhtQQh61F25EyAX7MePngF8wk0OU98czP2hF3gyMQeC5lYM+9UAtoyMhDwJTX4jYX5dKs5Sp6GRzxKWojYot+f5g9C57BQhgCiIpH1u4sCkwmqadsRVhwS8MVdH/hSL/Y1xyBxJHZ84qHwn04vNQbh+SihoI4QPQG1ExyL3DvXMzlYgQ5SV6N5eaUx2hu9qhUWME+dcbcHHxtHxnSJ+7Dp9GSk85SM8MmxI3dH47EVcUCIIlrw30zBeOc4vqjD4q+/tnIWbOhHKXnp0D0s9t+LP8dQ0vV6OyngDFvGa1S1HLqWTdxv3/QtsliVbLKzYPTVqroBuyhs4EAhjxry+4EuLxPfBoQ6MqMr22ycdzBR2lcbCflb1aAxERfLAKz88TbBaTPdEIMJwM8ViKVyAM2YKPu2j415j/2CF/fNsaHk4LSjVAMq70Ugw80Wdz01PDzKc4bjCic6FDYv1arCBZBT1cM+JMxRObnB3380IRvu4yoOHw1e0TGFYm86D/r+FHBIcSUBmLijcThpvJRrC/BIDg2klgZ/mB7axxFoJF9YVoRwU7NzO7JkJkf0mapUW1I6BBQ3kDgjOGMeIM/3IBr35Ee9v39uXrDSVNSY6UIAJGmqvSDnxHClGDxB8NodDD5zJ/niBJGNSrvBlBLFOcXDI9zR5cQF2b6k4BGB3P1VkBmKOngAf+bMf6tmFK9MysUfjSl6fyrdhZwbCjwUyDLZ7gF7ZGZUFcrTkwH2vsCjq7O+7KYcLN3eB5Cf/QT1Wq1xA2s4vZtRDM/XVZvlnKG17BRbQx4Q61+XfdhEf4rT5lMC0ms+DAbec3Ti8Nz9UPTPs24rz8PVVScu0JviGV5L82zqAIFXbXmadQ7owi5L89r1l+zn0XQ88ZYpPSJhYWMBfqcPzGrTnzIxzSk8mrAicJrvUc95uA3JyNqGzIiNgrpi+v69TZcZCqRGeG8XTmq2SLpZcAxbptn5zYHXNn3czmfw1aivHncEg6fCkKjjcpjTwhRZcgjdhVONVNxuI0l4XU8IcxUYEFYliJhT7Xx0vYGqibx8fmC3N9pA4dT8thkAF+WSvo1nkzGUELnLQR/s/lU4l/9Ez6N4kyNzE3EmtNHgSrHYDl5zAQMBa/NZYbaFn3gqY/EnDlCnESfO95H/sOYMGh2tWhIAXcwzHkRY0ESMC/JLfw3LrA4fW0PvuMKHv4HfpmtHACGa6S+uTiB69MJSwhfPB/vsx/jWgcvZAVWMcC8wLxrBNgbBwNDCtNHt1+XTRqEwUe+gwzvxNiu3PvtMHbKWVpnRDEQfU/QvQV8mFftVXSEZ5wz9hmDiLd4WfdsyH2EWbUcu8QEmi8YvYIKCOzRk2YWoQsJPEdwpkGCOesj4zhUIo7OaaS4gu5DkSBa1MAk+NXyaQgH4Qd5DX4WWLcFbxaJT+ZGJ6IPAxDF/BG/AsJuc41VhHvkhPN8jhdxoa5P9tcCI+H1c8o6CPg45j8xYu+CVVwo+96gOXGi3Ofsqy7ZGfS5uYWLyOlldAoH8G19IVORcd9QcSsUBMIzSMcHGPt7yM0xuwmg952bwKskGOfz7PIsWhGCJ1rJXIS5QktZAITZSdzXUtaKAgKD+0w67SANE/FxwyyxmYKKCqOV5BZ9gGHZnGjnvFJgndhD2hAD5G1FTD8aAJ7b7OkX8pLkktR/cjz+XSesYsOzS5bREkpdjYBVUQ/YjobRxWODRQxzhQ5NqsLTzOMp5FTrA/fSWlO+Yrb0HJ0OcKoa0iR9kGnSSGAvrbkB2G8cD2D5bER9gIP5OiISHy8NnFWyjS8Yn81ZY0+/ERiYWypGIXHYSVw0js+QeKCYEsjC29O2VACsLqW0ilpDg8vNPpYxfLhwmlJwo2SXEvMh5V18V2oVfUigkkVSeYG3cDrY3cgE21j/zFopM8U7Nr5Nyr/5Ft97UA4O1RJjKvXlBDWXlGWD9cbhWJ+qDhInyUXOIj/4GhPUloJpSd+qemy56wTvM04Ll1Sm7HxwGwU5cP4jKx4CAhfKqU3lGRBTsNj9WIdr2dCGaXYoCpAPcIATDhT5/lXd2Eqo9eB4SrVtMuZvX1ZrbUFAHuSDTEFCoo41WbC6k3i42QBEbaKzW+Uo/KQVgLn4xdKQAgK/dDwChWjHbDPW6XYu/jRgH2OS0ySBy1mlXOIKECf9f1ohq2JcTFfiPCnFMd2If7IIYEslFR0wBpnoxeQKuYf9hluw4iCyHpzvduRgDwQ++jLtdwpKtXR7JjzWELfUWRWi8KixEqRVRAUHNN4fpx8yGe3U4stzhSBY8/QxBz57HiwfwwLAAXN0exOQq6JfFnInI8OPFHsQH6ZPypgBy07KpH2exP0YButg9Y8CfpiUGgA2uvBwirMxFxsheATA0NiCKM+vgQye0SYC4wEoImisNk6se2t4sqTRHxMl45fOFhhkzOARiIG3jU6TgMKPnVWjbMZLRjNfVjiMXC52b5SHrgaYVl1DmjlBYyD5GeuPSjyOlVpVuwFSPMQ66qB7Kat835hpyEyuVqa0LtCeIccumuqwWeo3EzllOLd6kMEEEzGhQ8VZrA+HYabDlJOPu24b3sJ8v2GLsjoZXFb+xpxNbCf7lcIAJllQIrs1MuYhOWdOdSYs7nDFqv4u+nfcwU7lkdO7uxMWRGL4opvuXexxmHHh+0707gIOXtBnpZ5eAMtbEs5JbFiErQBOk2LRhTzkCkAXXNSps859Hp2Y/uNvVrZb6rJZF4ceK4e7Eoc+XgZWvsLN2Mjs2jQOM/yyxypTHVgWzmoVin0ZBCDpLy3AumrWPbY+0/6ZeBjzQCNdXpDS+7bNHzi4jFza9hhVamudwhxrEL3iswZKjCxuIJdZtmGPIXdt7xkFVlg+490Rj9UU2Wqncweza/Y95hlLi8+4wcVSYcumgFjFhsWmSOzoHVKI9F7q7yulAmmrsbXXZ+41FGJ1PYwTAVlg0+YPIjgKOzqHqJb2j3XhYl+wpTZy57AbXipkij7GZwkU+8z0hb4Gxk/neGkn8hBNme6f2a/g3UzQBCRt8PKwC53GJ+qyWKke4p0k9zZcRbxO04Feim7AO1jtk+o78W1hFXm91L5tIeaDlxhyp+CDaAeK5axqgrctrNuHWMOnAkDeBcSdH4fWW4m3D23b+CHlv98L6Tdk1+W2q8jb+Jb9NELTtRpIflFO1FEaNSpiwPtp7PrayH5IQ3RsqmI6aSe3eF+bVX9pQPXbHxJqNVVp2JBQ1oCMGSm36vOWMBliZKRz6AOtqlCBz9ti3AK2bqqxpq0Gl2ob1sJcBHELe7Gn1IBAWD7OwNyWArEna/FDuumanEWHWD/BG67GthSIH9qKAcfUnV2Nrf6FgjG1maEBYsCW4vgbqi2Qwl0GIbG994a2FIjj28nFQLoYl1DRk6iGBgcjNRLmYljJp5lQTR7k1T01poQWbsQYhHwaCzlRMUXgP1VNFzbQq1fRwNwRcqLa57VRGrRO0yiqL8WXPolCXlvr3ESyaYZWMTfV83Whva2E3MS2+aVkvyG92wtg8elzFXUVLTG/tF2O8IS8u1LXHZER42jmvSE5wq3yvMkmFvpdYV2q44deXArJ826Rqy+0Za4xNxBlSAf/chV1RkFy9XvswHr1FmRL6K2R2IF99Wto6FpovYVxzQzZSEafARZAb+u5Qz17Cq2ZMat7ormfRvkSBOXm2St3YEbrnoxq125MhmqttGzhdw0p1qxoSxG06Ncf9mjmbqKGMAgIb6Riozu8/tCghlTSrSppGXmApRgV1K6UI2pIteuAJZ0bhRI8bVDt0NcqU0fUAevWctP9WXXLl1BQbRkV+llTtdya9fhUGt4NOyvBHUoTnDfyCLIeX6unAu0B7H9bis9RqtK5gdHTPRV0+mLQ/j+LiU3UHTYL+R6R9MVQ720iScP7sZd/544Jt4G0F4yst4lyfxqxU04NqyXEsGzxSaLkR7L+NKo9hjiPOQ/bNVMZ8RyJuSjrMaTYJ4qOYPdHtpNTxd5tJcheMPI+UUq9vmjdv4tSDarhJhmXkvf6UunX1vPJ0MSxi3RteDFADdz+aerX1txzT+jS8cSlm6oCypbCG6U09dxr7ptIt2n96aqaCDYGqbBEIhrNfRMbel8KbYNqtO4aLIFP3cErCrTm3pfy/qWSLRp1VFr7AH6NNOLKU+hfKu9BG5BZJJY7aUBQcclfsAQqPWhlfYTJK6wsJvYSoC6COHMCWKmPsKQXNGV3t+v5rAjKlmL1fMVe0GQ/b9gK6AmTS8i0QdlSTM2Uaj9vqic7xWSWXZbzMaCCP7UvXLknO9FX3yMesLd5b7QUlFeo5BXqffWJuxGcPgo7F1koAc+qrqW2xt0IxP0WaDihubuhTeCrWMQldO63IO77wGRSl90JEODevQn9ziTQe2Zgt6e+tboBdWBa8fbBUjTvmSHuCoJBGNPgUguIVYzFJSW6dwVR9ydFnM7QaXsJCtCBcn1oG/r3PRF3drls46Nmz2wnAH1AC6Ggf2cXee9aWpOo1t25A7A5fmVHVJN718i786oWgRYKIkzBtDAuosJmd+dR9x+6Re6Tbmc1q6j1t8IuMLz/kL7D0rkkSaf2bjPK25wL157xHZaSe0ibm5Z2jc35Xg3+WMEW95Cq3CX7NoSrPC3muc1dss33Af8BtLoPuPFO5z+Alnc6N93L/X60vpdbfrf6+2HhbnXB37z9S6u4AQTqZ0LeAT2Iilnpr0AM/e+GxuoK1lD8FY4K2aB5qwLhJrIXeEebISS17tX0bXQs6B3pqoec3ktBJ3irlxJ8XIY3i9uDWArfrvexeFdf8h7rt0IqEJi1jM6K3pHzO1lqLMQXLGQpiW68cTcx7WZ4YmWAJDFGGUgG/ew9OzUVJ9tOzz6kGvm1/u4SSAXgyNZuQvohSRoVd4NQ3EoNlyzpwI3ECtH55pWi0d2I6d9ri62z0MZVV+t5XjScERI5sWzsYDkRw9VraHSwK6X1KuNUIIraG3avkI0xlkzXheKBZu2tj127h/0jViXeUX/eHMuK2o+65KrhCMsVPnVmxuEJSudxV5GoYIw/sMPgbIDnlx4+u9ir/ieexbPrNrRHdj6y3CnXQ1S0B9SKg9pgSiTXrGcTewvpT2ZEF4rkBekDDlV2uF9c7Oyf4LKgWhhEr5HAwYyqPOwvopa71UsjshpgOHtZcN2bkJl8t92aT02J9KY5tTtvOExeaZeCK855LL+OsX6UcRAfv8j2Ezdkr86OCBOqjrvAfBQHvhqdAz+IR/RFNHds3xF5HqzIvOhqLRfZeDINHNrIcZ1gOhlnC9na3ZGs3hN5dnLZJUcF9svzYncjNP4InUEZQXbdgRN+xDfSdovzkmKbT5zzN7owV98kW8XI3a6Xy+V620zUE8PvNwe9/AlZKGQFO4t6hCm8uOk8miOJ3+W4BAhHc53NqobhvFO7TBfhakf2qTHCdbf6S/Td4aWEsWOCw6ftSz0sIYh+myRbM5a/0TtyO1Xh3DTLNkt5uGm1747fNcILN1mzJoDhnG3Cv7k5EQw249n8RNsJPNan+Wy8eW9KoAn8NI5GyfwkEyTD0zwZRXH6frFuCtfzwzTOj7Nkcbipa8O7vrYf3pS3wyKZHfM4DX2v4/jHf+ZvGt8WvzLoAAAAAElFTkSuQmCC"} />
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.FollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.UnFollowThunkCreator(u.id)
                                    
                                }}>Unfollow</button>
                                : <button disabled={props.FollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.FollowThunkCreator(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.id}
                            </div>

                        </span>

                    </span>

                </div>)
            }
        </div>
    )
}
export default Users;