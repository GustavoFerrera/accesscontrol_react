import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #333333;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 6);
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  background-color: #333333;
  border: 2px solid #d2fa00;
  box-shadow: 0 2px 2px rgba(3, 3, 3, 3);
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  border: 2px solid #5e45b8;
`;
export const Label = styled.label`
  font-size: 30px;
  font-weight: 600;
  color: #d2fa00;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
