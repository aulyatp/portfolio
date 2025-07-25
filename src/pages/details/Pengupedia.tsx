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

      <Paragraph>
        <div style={{ textAlign: "center" }}>
          <br />
          Pengupedia is an educational game focused on penguins, where players explore, interact, and learn.
        </div>
      </Paragraph>

      <Media>
        <iframe src="https://www.youtube.com/embed/ZDnyhZySkjg" title="Pengupedia Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Media>

      <Paragraph>
        <div style={{ textAlign: "center" }}>
          Check it out <a href="https://s.id/Pengupedia">here!</a> <br />
        </div>
      </Paragraph>

      <BoundingBox>
        <Header
          items={[
            {
              label: "01. OVERVIEW",
              value: (
                <Paragraph>
                  <div style={{ textAlign: "center" }}>Balancing visual aesthetics with information clarity for the game.</div>
                </Paragraph>
              ),
            },
          ]}
        />

        <Paragraph>
          In game design, creating a good user interface (UI) and user experience (UX) requires balancing visual aesthetics with informational clarity. Proper implementation of interfaces element that support learning condition positively
          contributes to a better user experience. The challenge lies in designing an interface that combines visually pleasing aesthetics with intuitive usability, enabling users to quickly understand the content. An interface that is both
          visually engaging and functional has positive impacts on user experience. Furthermore, intuitive design ensures that information can be accessed quickly without confusing the user. Studies also reveal that elements such as color
          contrast and visual aesthetics greatly influence how users focus on objects displayed on the screen.
        </Paragraph>

        <Media>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}MainInterfaceUI.jpg`} className="media-element" />
          </div>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}PauseUI.jpg`} className="media-element" />
          </div>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}PediaUI.jpg`} className="media-element" />
          </div>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}PlayUI.jpg`} className="media-element" />
          </div>
        </Media>
      </BoundingBox>

      <BoundingBox>
        <Header
          items={[
            {
              label: "02. PROCESS",
              value: (
                <Paragraph>
                  <div style={{ textAlign: "center" }}>Emphatize, Define, Ideate, Prototype, and Test.</div>
                </Paragraph>
              ),
            },
          ]}
        />

        <Paragraph>
          The empathize stage is the initial step in Design Thinking, aimed at understanding user needs and challenges. This process was conducted through two methods: respondent interviews and competitive analysis. contrast and visual
          aesthetics greatly influence how users focus on objects displayed on the screen. Insights from the empathize stage were analyzed to identify pain points, refined through the "How Might We" (HMW) approach to develop actionable
          solutions for effective UI/UX design.
        </Paragraph>

        <Paragraph>
          How Might We is an approach to obtain potential solutions to the identified pain points. Potential solutions include creating a game that incorporates factual educational content; designing a user-friendly and intuitive UI;
          creating 3D penguin models for each species, complete with animations, sounds, and detailed information; developing a visually appealing interface with harmonious colors and patterns; and adding diverse minigames.
        </Paragraph>

        <Header
          items={[
            {
              label: "Prototypes",
              value: "",
            },
          ]}
        />

        <Media>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}settingsW.jpg`} className="media-element" />
          </div>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}playW.jpg`} className="media-element" />
          </div>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}pediaW.jpg`} className="media-element" />
          </div>
          <div className="media-image-wrapper">
            <img src={`${import.meta.env.BASE_URL}3dProgress.jpg`} className="media-element" />
          </div>
        </Media>
      </BoundingBox>

      <BoundingBox>
        <Header
          items={[
            {
              label: "03. RESULTS",
              value: (
                <Paragraph>
                  <div style={{ textAlign: "center" }}>Modified GUESS Testing.</div>
                </Paragraph>
              ),
            },
          ]}
        />

        <Paragraph>
          Positive reception from playtesting: 28 out of 30 users enjoyed the game. The normalized GUESS score for Ekspedisi Pengupedia is 76.48, indicating a Grade B category of "Good." This shows that the game is well-executed but has
          certain areas that require improvement. The specific areas for enhancement can be identified by analyzing the normalized scores for each subscale.
        </Paragraph>
      </BoundingBox>
    </BannerLayout>
  );
}
