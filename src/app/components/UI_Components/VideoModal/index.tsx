"use client";

import type { ModalProps } from "./interface";
import { ModalContainerStyles } from "./styled";
import LineSeparator from "../LineSeparator";
import { AiOutlineClose } from "react-icons/ai";
import SquareButtonChip from "../SquareButtonChip";

export default function VideoModal({
  description,
  title,
  video_url,
  isOpen,
  onClose,
}: ModalProps) {

  return (
    <>
      {isOpen && (
        <ModalContainerStyles>
          <div className="modal">
            <hr className="top-line" />
            <span onClick={onClose}>
              <AiOutlineClose width={100} />
            </span>
            <div className="content">
              <div className="title"><strong>Webinar:</strong>{' '} {title || "Title"}</div>
              <div className="video-area">
                <iframe src={video_url} />
              </div>
              <div className="description">
                <h4>Descrição</h4>
                <LineSeparator spacing="0.8em" />
                <p>{description || "Description..."}</p>
                <h4>Downloads</h4>
                <LineSeparator spacing="0.8em" />
                <div className="downloads">
                  <SquareButtonChip variant="success" label="Spreadsheet.xls" />
                  <SquareButtonChip variant="primary" label="Document.doc" />
                  <SquareButtonChip variant="yellow" label="Presentation.ppt" />
                </div>
              </div>
            </div>
          </div>
        </ModalContainerStyles>
      )}
    </>
  );
}
