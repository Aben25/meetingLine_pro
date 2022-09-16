import React from 'react'
import QRCode from "react-qr-code";

export default function Share({url}) {
    const link = window.location.hostname +"/"+ url;
    console.log("meeting.titl", link);
  return (
    <>
      <div className="flex grid grid-cols-1 gap-1">
        <div className="flex-row border-2 border-black-500  p-2 text-center">
          <div >
            <QRCode value={link} 
            size={300}
            bgColor={"#FFFFFF"}
            fgColor={"#000000"}
            level={"L"}
            includeMargin={true}
            borderRadius={16}
            borderStyle={"solid"}
            borderWidth={16}
            imageSettings={{ src: "./x.png", height: 50, width: 50, excavate: true }}

            />
          </div>
        </div>
        <div className="grid grid-cols-3 p-2">
          <div className="col-span-2 p-1">Link: {link}</div>
          <div className="col-span-1   ">
            <img
              onClick={() => {
                navigator.clipboard.writeText(link);
                navigator.clipboard.readText();
              }}
              className="float-left"
              src="./copy.png"
              width={25}
            />
            <img
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "Share Meeting",
                      url: {link},
                    })
                    .then(() => {
                      console.log("Thanks for sharing!");
                    })
                    .catch(console.error);
                } else {
                  shareDialog.classList.add("is-open");
                }
              }}
              className="float-right border-2 border-gray p-1"
              src="./shareblk.png"
              width={30}
            />
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
