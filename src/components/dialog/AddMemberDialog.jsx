import React from "react";
import { Dialog, DialogTitle, Stack, Typography, Button } from "@mui/material";
import { sampleUsers } from "../../../constants/SampleData";
import UserItem from "../shared/UserItem";
import { useState } from "react";
const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {


const [members,setMembers] = useState(sampleUsers);
const [selectedMembers,setSelectedMembers] = useState([]);
  
  
    const selectMemberHandler = (id) => {
      setSelectedMembers((prev)=>(prev.includes(id)?prev.filter((currElement)=>currElement !=id):[...prev,id]));
    };
  

  
  const addMemberSubmitHandler = ()=>{

  }
  const closeHandler = ()=>{
    setSelectedMembers([]);
    setMembers([]);
  }
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} spacing={"2rem"} width={"20rem"} textAlign={"center"}>
        <DialogTitle>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ?   (members.map((i) => (
            <UserItem key={i.id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
          ))) : (<Typography textAlign={"center"}>No Friends</Typography>)}
        </Stack>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Button onClick={closeHandler}  color="error" variant="outlined">
              Cancel
            </Button>
            <Button onClick={addMemberSubmitHandler} variant="contained" disabled={isLoadingAddMember}>
              Submit Changes
            </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
