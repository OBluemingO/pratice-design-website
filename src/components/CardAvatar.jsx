import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  margin: 1rem auto;
  padding: 1.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.Testimonials};
`;

const CardAvatar = ({ comment, avatar, name, job }) => {
  return (
    <Box>
      <p style={{ textAlign: "start" }}>{comment}</p>
      <div style={{display:'flex', margin:'1rem 0 0 0'}}>
        <img
          src={avatar}
          alt=""
          width="35px"
          style={{ borderRadius: "100%" ,margin:'0 0.5rem 0 0'}}
        />
        <div style={{textAlign:'start'}}>
          <p>{name}</p>
          <p>{job}</p>
        </div>
      </div>
    </Box>
  );
};

export default CardAvatar;

