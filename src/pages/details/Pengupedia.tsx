import BoundingBox from "../../components/details/BoundingBox";
import Header from "../../components/details/Header";
import Media from "../../components/details/Media";
import Paragraph from "../../components/details/Paragraph";
import Title from "../../components/details/Title";
import BannerLayout from "../../components/details/BannerLayout";

export default function Pengupedia() {
  return (
    <BannerLayout imgSrc={`${import.meta.env.BASE_URL}pengupedia_banner.jpg`}>
      <Title>Happy Feet, Sharp Minds</Title>

      <Header
        items={[
          {
            label: "Role",
            value: (
              <>
                UI/UX Designer, <br /> Frontend Developer
              </>
            ),
          },
          { label: "Tools", value: "Figma, Unity, Photoshop" },
        ]}
      />

      <Media>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Pengupedia Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "1rem", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
        ></iframe>
      </Media>

      <Paragraph>
        <div style={{ textAlign: "center" }}>
          Check it out <a href="https://s.id/Pengupedia">here!</a> <br />
          Pengupedia is an educational game focused on penguins, where players explore, interact, and learn.
        </div>
      </Paragraph>

      <BoundingBox>
        <Header
          items={[
            {
              label: "01. OVERVIEW",
              value: <Paragraph>This project showcases how I balanced visual aesthetics with information clarity for the game.</Paragraph>,
            },
          ]}
        />

        <Media>
          <img src={`${import.meta.env.BASE_URL}MainInterfaceUI.jpg`} />
        </Media>

        <Paragraph>
          In game design, creating a good user interface (UI) and user experience (UX) requires balancing visual aesthetics with informational clarity. Proper implementation of interfaces element that support learning condition positively
          contributes to a better user experience. The challenge lies in designing an interface that combines visually pleasing aesthetics with intuitive usability, enabling users to quickly understand the content. An interface that is both
          visually engaging and functional has positive impacts on user experience. Furthermore, intuitive design ensures that information can be accessed quickly without confusing the user. Studies also reveal that elements such as color
          contrast and visual aesthetics greatly influence how users focus on objects displayed on the screen.
        </Paragraph>

        <Media>
          <img src={`${import.meta.env.BASE_URL}PauseUI.jpg`} />
        </Media>
      </BoundingBox>
    </BannerLayout>
  );
}
