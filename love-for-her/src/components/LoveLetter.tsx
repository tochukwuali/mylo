import React from "react";

const LoveLetter: React.FC = () => {
  return (
    <div className="love-letter">
      <p>
        I don’t say this enough, but thank you for being exactly who you are.
        For the random voice notes. For the sleepy “got home safe” texts. For
        listening to the same rant twice. For loving me on my easy days and
        staying on the hard ones.
      </p>
      <p>
        I love the way you laugh at your own jokes, the way you talk about the
        things you care about, and the way you somehow make every room feel a
        little softer just by existing in it.
      </p>
      <p>
        Five years later, it’s still you. It’s always been you. And if you’re
        okay with it, I’d really like it to keep being you for a very, very
        long time.
      </p>
      <p className="love-letter-signoff">
        With all of my heart,
        <br />
        <span className="love-letter-signature">your favorite human</span>
      </p>
    </div>
  );
};

export default LoveLetter;

