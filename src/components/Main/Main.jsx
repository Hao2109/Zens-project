/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./Main.css";
import { data } from "./data";
import { useCookies } from "react-cookie";
const Main = () => {
  const [currentJoke, setCurrentJoke] = useState(0);
  const [cookies, setCookie] = useCookies(["votedJokes"]);

  //Dùng để cập nhật trạng thái mỗi khi render/reload lại page
  useEffect(() => {
    // Kiểm tra xem trong cookie joke đã vote chưa, nếu vote rồi thì ko hiện lên nữa
    const indexOfNextUnvotedJoke = data.findIndex(
      (joke) =>
        !cookies.votedJokes || !cookies.votedJokes.includes(joke.id.toString())
    );

    //Này kiểm tra nếu joke nào chưa được vote thì hiện joke đó lên, không thì hiện lên đã hết
    if (indexOfNextUnvotedJoke !== -1) {
      setCurrentJoke(indexOfNextUnvotedJoke);
    } else {
      setCurrentJoke(-1);
    }
  }, [currentJoke, cookies.votedJokes]);

  const handleNextJoke = () => {
    if (currentJoke < data.length - 1) {
      setCurrentJoke(currentJoke + 1);
    } else {
      setCurrentJoke(-1);
    }
  };

  const handleVote = () => {
    const votedJokes = cookies.votedJokes ? [...cookies.votedJokes] : [];
    votedJokes.push(data[currentJoke].id.toString());
    setCookie("votedJokes", votedJokes, { path: "/" });
    handleNextJoke();
  };

  return (
    <>
      <div className="banner">
        <h2 style={{ marginBottom: "12px", fontSize: "30px" }}>
          A joke a day keeps the the doctor away
        </h2>
        <div style={{ fontSize: "small" }}>
          If you joke wrong way, your teeth have to pay. (Serious)
        </div>
      </div>
      <div className="content">
        {currentJoke != -1 ? (
          <>
            <div key={data[currentJoke].id}>{data[currentJoke].content}</div>
            <hr />
            <div className="button-group">
              <button
                style={{ background: "#2C7EDB" }}
                onClick={() => handleVote("like")}
              >
                This is Funny!
              </button>
              <button
                style={{ background: "#29B363" }}
                onClick={() => handleVote("dislike")}
              >
                This is not funny.
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
            }}
          >
            That's all the jokes for today! Come back another day!
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
