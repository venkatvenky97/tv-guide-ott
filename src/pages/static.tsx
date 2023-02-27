import { url } from "inspector";
import React from "react";

interface Props {
  data: string[];
}
const Static: React.FC<Props> = ({ data }) => {
  const listItems = data.map((get: any) => (
    <div className="col-lg-4 col-sm-6" key={get.id}>
      <section id="listing-section" className="px-3 px-md-3">
        <div
          className="c-card text-white d-flex flex-column justify-content-between channel bbc-two"
          style={{
            backgroundImage: `url(${get.asset.imageURL})`,
          }}
        >
          <div className="col p-0 d-flex justify-content-between align-items-start">
            <div className="logo">
              <div className="d-flex align-items-center">
                <img src={get.channel.logoURL} alt="BBC Two" />
                <span className="ml-2 date">
                  6.00pm
                  <br />
                  Today
                </span>
                {/* <span className="ml-2 date">{post.startAt}</span> */}
              </div>
            </div>
          </div>
          <div className="desc col d-flex justify-content-end flex-column">
            <h6 className="title font-weight-bold">{get.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              {/* <div className="sub-title">S1 E8</div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  ));
  return (
    <>
      <section style={{ backgroundColor: "#292929" }}>
        <div className="container">
          <div className="row">{listItems}</div>
        </div>
      </section>
    </>
  );
};
export default Static;
