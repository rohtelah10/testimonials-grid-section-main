import styled, { type DefaultTheme } from "styled-components";
import {
  TextPreset1,
  TextPreset2,
  TextPreset4,
} from "../Typography/Typography";

interface CardProps {
  name: string;
  designation: string;
  title: string;
  icon: string;
  bgcolor?: keyof DefaultTheme["colors"];
  namecolor?: keyof DefaultTheme["colors"];
  designationcolor?: keyof DefaultTheme["colors"];
  titlecolor?: keyof DefaultTheme["colors"];
  colspan?: number;
  backgroundimage?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  name,
  designation,
  title,
  icon,
  children,
  bgcolor,
  namecolor,
  designationcolor,
  titlecolor,
  backgroundimage = false,
  colspan = 1,
}) => {
  return (
    <DisplayCard bgcolor={bgcolor} colspan={colspan} backgroundimage={backgroundimage}>
      <NameCard>
        <ProfileImage src={icon} alt="" />
        <Name>
          <TextPreset2 color={namecolor}>{name}</TextPreset2>
          <TextPreset4 color={designationcolor}>{designation}</TextPreset4>
        </Name>
      </NameCard>
      <TextPreset1 color={titlecolor}>{title}</TextPreset1>
      {children}
    </DisplayCard>
  );
};

export default Card;

const DisplayCard = styled.div<{
  colspan: number;
  bgcolor?: keyof DefaultTheme["colors"];
  backgroundimage: boolean;
}>`
  padding: 32px;
  border-radius: 8px;
  grid-column: span ${(props) => props.colspan};

 
  background-image: ${ (props) =>  props.backgroundimage ? "url('/assets/images/bg-pattern-quotation.svg')" : "none" }; 

  background-position: calc(100% - 80px) 0;  
  background-size: 104px 102px;   
  background-repeat: no-repeat;

  background-color: ${({ theme, bgcolor }) =>
    theme.colors[bgcolor || "grey200"]};

  min-height: 200px;  
  
  box-shadow: 5px 5px 25px rgba(200, 200, 200);

  position: relative;

  @media (max-width: 400px) {
    background-image: none
  }
`;

const NameCard = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  margin: 0%;
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;