import "../images/people-founder.png";

const People = () => {
  return (
    <div id="founder-picture">
      <img src={require("../images/people-founder.png")}></img>
      <h2 id="founder">Founder Emma Bayley-Melendez</h2>
      <p id="about-em">
        Emma founded She Chats Tech after feeling she was lacking an in-person
        women in tech community. Whilst she found there were a range of events
        being organised the structure could often be more formal and not always
        lead to finding more long-term connections with other like-minded
        individuals. With the hope of creating a series of informal in-person
        events covering a range of topics and for those in the early stages of
        their tech journey, she wanted to curate a safe space for learning,
        experience sharing and connection.Emma is a non-tech graduate that
        embarked on a career in tech after completing a Python course with Code
        First Girls, she is passionate about diversity in tech and in supporting
        others as they take their steps into tech.
      </p>
    </div>
  );
};

export default People;
