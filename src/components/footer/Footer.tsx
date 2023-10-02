import { FC } from "react";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <>
      <figure className="bottom-mockup">
        <img src="images/footer.png" alt="" />
      </figure>
      <div className="bottombar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="">
                &copy; copyright All rights reserved by socimo 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
