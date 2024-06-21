import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../../constants/SampleData";
import UserItem from "../shared/UserItem";


const NewGroup = () => {

  const [members,setMembers] = useState(sampleUsers);
  const [selectedMembers,setSelectedMembers] = useState([]);


  const selectMemberHandler = (id) => {
    setSelectedMembers((prev)=>(prev.includes(id)?prev.filter((currElement)=>currElement !=id):[...prev,id]));
  };

  const submitHandler = ()=>{};
  const closeHandler = ()=>{}

  const groupName = useInputValidation("");

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} Width={"25rem"} spacing={"2rem"}>
        <DialogTitle variant="h4" textAlign={"center"}  >New Group</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}></TextField>
        <Typography varient="body1" >Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
          ))}
        </Stack>  
        <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Button variant="text" color="error" size="large">
              Cancel
            </Button>
            <Button variant="contained" onClick={submitHandler} >
              Create
            </Button >
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;