import React, { Fragment } from "react";
import { Button, Typography } from "@mui/material";
import "./Weight.css";
import { CgGym } from "react-icons/cg";
import { Delete } from "@mui/icons-material";

import { deleteWeight, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";
import "./Weight.css"



export const WeightCard = ({
weightImage,
weightTitle,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
        await dispatch(deleteWeight(id));
        dispatch(getUser());
      };
  return (
  <Fragment>
     
<div id="columns">
  
 <figure>
    <img src={weightImage} />
    <figcaption>{weightTitle}</figcaption>
  </figure>
  {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}

</div>


  </Fragment>

  )
}


const Weights = ({ weights }) => {
  return (

      <div className="weightWrapper">
         <Typography variant="h3" style={{ color: 'black',alignItems: 'center', display: 'flex',justifyContent: 'center',}}>
       Before & After <CgGym />
      </Typography>
      {weights.map((item) => (
            <WeightCard
            id={item._id}
            key={item._id}
            weightImage={item.image.url}
            weightTitle={item.title}
            />
          ))}
<small>Developer © <a href="https://www.instagram.com/irayhul">RAHUL SHARMA</a></small>
    </div>
  );
};



export default Weights