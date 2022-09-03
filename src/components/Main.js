import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="images/user.svg" />
          <button> Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo.svg" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/photo.svg" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/photo.svg" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/photo.svg" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <ShareActor>
            <img src="images/user.svg" />
            <div>
              <span>Title</span>
              <span>UserInfo</span>
              <span>Date</span>
            </div>
          </ShareActor>
          <Description></Description>
          <SharedImg>
            <a>
              <img src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320" />
            </a>
            <SocialCounts>
              <li>
                <button>
                  <img src="https://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup500.png" />
                  <img src="https://www.userflow.nl/images/Linkedin-Celebrate-Icon-ClappingHands250.png" />
                  <span>75</span>
                </button>
              </li>
              <li>
                <a>2 comments</a>
              </li>
            </SocialCounts>
            <SocialActions>
              <button>
                <img src="https://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup500.png" />
                <span>Like</span>
              </button>
              <button>
                <img src="https://image.pngaaa.com/49/3989049-middle.png" />
                <span>comments</span>
              </button>
              <button>
                <img src="https://cdn0.iconfinder.com/data/icons/linkedin-ui-twotone/48/Paul-16-512.png" />
                <span>Share</span>
              </button>
              <button>
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/send-icon.png" />
                <span>Send</span>
              </button>
            </SocialActions>
          </SharedImg>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

export default Main;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      background: transparent;
      min-height: 48px;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;

      padding: 8px 16px 0px 16px;
      img {
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
      button {
        margin: 4px 0;
        border-radius: 40px;
        padding-left: 16px;
        flex-grow: 1;
        background: white;
        text-align: left;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
    }
    button {
      img {
        margin: 0 4px 0 -2px;
      }
      span {
        color: #70b5f9;
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  overflow: visible;
`;
const ShareActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
  }
  img {
    width: 50px;
    height: 50px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
  }
  span {
    text-align: left;
    &:first-child {
      font-size: 14px;
      font-weight: 700;
    }
    &:nth-child(n + 1) {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const Description = styled.div`
  padding: 0 15px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 15px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 15px;
  padding: 8px 0;
  border-bottom: 1px solod #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      img {
        width: 30px;
      }
    }
  }
`;
const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 10px;
    color: #0a66c2;
    width: 120px;
    height: 40px;
    img {
      width: 30px;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
