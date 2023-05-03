import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState()

  useEffect(() => {
    const getUsers = async () => {
      try{
        const res = await axios.get("http://localhost:8000/api/user?new=true",{headers : {
          token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTBiYjMwZmY1YTEyOTg0ZmY5YjgxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzExOTIwOSwiZXhwIjoxNjgzNTUxMjA5fQ.rymCQfwpsdWlcgs8G2zK8CiIaEoDgZI6kp6MuxHsJMI"
        }})

        console.log(res.data)

        setNewUsers(res.data)
      }
      catch(err){
        console.log(err)
      }
    }

    getUsers()

  }, [])


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers?.map((user) => (
          <li className="widgetSmListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}


      </ul>
    </div>
  );
}
