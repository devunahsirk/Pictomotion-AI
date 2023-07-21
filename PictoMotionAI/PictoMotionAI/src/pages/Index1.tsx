import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import MaskGroup from "../components/MaskGroup";
import styles from "./Index1.module.css";
const Index1: FunctionComponent = () => {
  return (
    <div className={styles.index1}>
      <div className={styles.indexChild} />
      <div className={styles.indexItem} />
      <div className={styles.robotHumanSilhouettes1} />
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <div className={styles.features}>FEATURES</div>
      <div className={styles.contactUs}>CONTACT US</div>
      <div className={styles.signIn}>SIGN IN</div>
      <img className={styles.indexInner} alt="" src="/group-1.svg" />
      <div className={styles.hill3Parent}>
        <img className={styles.hill3Icon} alt="" src="/hill3@2x.png" />
        <img className={styles.hill4Icon} alt="" src="/hill4@2x.png" />
        <img className={styles.plantIcon} alt="" src="/plant@2x.png" />
        <img className={styles.treeIcon} alt="" src="/tree@2x.png" />
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>HOME</div>
        <img className={styles.groupChild} alt="" src="/line-4.svg" />
      </div>
      <div className={styles.unleashThePower}>
        Unleash the power of AI for creating stunning videos
      </div>
      <div className={styles.ourAiVideo}>
        Our AI Video Maker enables you to generate captivating videos using
        nothing more than images, audio, captions, and a storyboard. Forget the
        hassle of traditional video editing processes – step into the future
        with us!
      </div>
      <div className={styles.revolutionaryAiVideo}>
        Revolutionary AI Video Maker
      </div>
      <MaskGroup />
      <div className={styles.robo1Colour3}>
        <img
          className={styles.robo1Colour31}
          alt=""
          src="/robo-1-colour-3@2x.png"
        />
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupItem} alt="" src="/group-2.svg" />
        <div className={styles.robo1ColourInvert2}>
          <img
            className={styles.robo1ColourInvert21}
            alt=""
            src="/robo-1-colour-invert-2@2x.png"
          />
        </div>
      </div>
      <Button
        className={styles.groupButton}
        sx={{ width: 315 }}
        variant="contained"
        color="primary"
      >
        Get Started
      </Button>
      <img
        className={styles.robotHumanSilhouettes21Icon}
        alt=""
        src="/robothumansilhouettes--2--1removebgpreview-1@2x.png"
      />
      <div className={styles.gotAnyQuestions}>
        Got any questions about our AI Video Maker? Check out our frequently
        asked questions or reach out to our support team who are always ready to
        help you navigate the world of video creation using AI!
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.allRightsReserved}>
        @All rights reserved by PICTOMOTION AI
      </div>
      <div className={styles.into}>{`Into `}</div>
      <div className={styles.story}>Story</div>
      <div className={styles.images}>Images</div>
      <div className={styles.turnYour}>Turn your</div>
      <Button
        className={styles.indexChild1}
        sx={{ width: 315 }}
        variant="contained"
        color="primary"
      >
        Try Now
      </Button>
    </div>
  );
};

export default Index1;
