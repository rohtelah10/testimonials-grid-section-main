import Card from "../components/Card/Card";
import styled from "styled-components";
import DanielImg from "/assets/images/image-daniel.jpg";
import JeanetteImg from "/assets/images/image-jeanette.jpg";
import JonathonImg from "/assets/images/image-jonathan.jpg";
import KiraImg from "/assets/images/image-kira.jpg";
import PatrickImg from "/assets/images/image-patrick.jpg";
import { TextPreset3 } from "../components/Typography/Typography";
import { useEffect, useState } from "react";

export default function () {

  const [isMobile, setIsMobile] = useState(false);

  useEffect( () => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  },[]);

  return (
    <GridContainer>
      <InnerContainer>
        <Card
          name={"Daniel Clifford"}
          designation={"Verified Graduate"}
          icon={DanielImg}
          namecolor={"white"}
          designationcolor={"purple50"}
          titlecolor={"white"}
          bgcolor={"purple500"}
          colspan={ isMobile ? 1 : 2}
          backgroundimage={true}
          title={
            "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
          }
        >
          <TextPreset3 color={"purple50"}>
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </TextPreset3>
        </Card>
        <Card
          name={"Jonathan Walters"}
          designation={"Verified Graduate"}
          icon={JonathonImg}
          namecolor={"white"}
          designationcolor={"grey100"}
          titlecolor={"white"}
          bgcolor={"grey500"}
          colspan={1}
          title={"The team was very supportive and kept me motivated"}
        >
          <TextPreset3 color={"grey100"}>
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. “
          </TextPreset3>
        </Card>
        <Card
          name={"Jeanette Harmon"}
          designation={"Verified Graduate"}
          icon={JeanetteImg}
          namecolor={"grey500"}
          designationcolor={"grey400"}
          titlecolor={"grey500"}
          bgcolor={"white"}
          colspan={1}
          title={"An overall wonderful and rewarding experience"}
        >
          <TextPreset3 color={"grey400"}>
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </TextPreset3>
        </Card>
        <Card
          name={"Patrick Abrams"}
          designation={"Verified Graduate"}
          icon={PatrickImg}
          namecolor={"white"}
          designationcolor={"white"}
          titlecolor={"grey200"}
          bgcolor={"dark-blue"}
          colspan={ isMobile ? 1 : 2}
          title={
            "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
          }
        >
          <TextPreset3 color={"grey100"}>
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </TextPreset3>
        </Card>
      </InnerContainer>
      <Card
        name={"Kira Whittle"}
        designation={"Verified Graduate"}
        icon={KiraImg}
        namecolor={"grey500"}
        designationcolor={"grey400"}
        titlecolor={"grey500"}
        bgcolor={"white"}
        title={"Such a life-changing experience. Highly recommended!"}
      >
        <TextPreset3 color={"grey400"}>
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </TextPreset3>
      </Card>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  width: 1114px;
  display: grid;
  gap: 32px;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 800px) {
    width: 650px;
    grid-template-columns: 1fr;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 400px) and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;