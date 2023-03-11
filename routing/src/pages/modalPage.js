import React, { useState } from "react";
import Button from "../components/button";
import Modal from "../components/modal";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }
  const actionBar = (
    <Button primary handleClick={handleClick}>
      I agree
    </Button>
  );
  const modal = (
    <Modal handleClick={handleClick} actionBar={actionBar}>
      are you an agree of this information
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary handleClick={handleClick}>
        Show Modal
      </Button>

      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam
        provident dolore aliquam, recusandae unde dicta placeat vitae id modi
        dolorem fugit molestias totam adipisci autem tempora. Excepturi odio
        exercitationem fugit dolor nam illo labore eum aspernatur, ducimus
        quaerat quos quasi quae voluptates. Illo, error quaerat quas alias
        explicabo facilis? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Eum magnam provident dolore aliquam, recusandae unde dicta placeat
        vitae id modi dolorem fugit molestias totam adipisci autem tempora.
        Excepturi odio exercitationem fugit dolor nam illo labore eum
        aspernatur, ducimus quaerat quos quasi quae voluptates. Illo, error
        quaerat quas alias explicabo facilis? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Eum magnam provident dolore aliquam,
        recusandae unde dicta placeat vitae id modi dolorem fugit molestias
        totam adipisci autem tempora. Excepturi odio exercitationem fugit dolor
        nam illo labore eum aspernatur, ducimus quaerat quos quasi quae
        voluptates. Illo, error quaerat quas alias explicabo facilis? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam provident
        dolore aliquam, recusandae unde dicta placeat vitae id modi dolorem
        fugit molestias totam adipisci autem tempora. Excepturi odio
        exercitationem fugit dolor nam illo labore eum aspernatur, ducimus
        quaerat quos quasi quae voluptates. Illo, error quaerat quas alias
        explicabo facilis? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Eum magnam provident dolore aliquam, recusandae unde dicta placeat
        vitae id modi dolorem fugit molestias totam adipisci autem tempora.
        Excepturi odio exercitationem fugit dolor nam illo labore eum
        aspernatur, ducimus quaerat quos quasi quae voluptates. Illo, error
        quaerat quas alias explicabo facilis? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Eum magnam provident dolore aliquam,
        recusandae unde dicta placeat vitae id modi dolorem fugit molestias
        totam adipisci autem tempora. Excepturi odio exercitationem fugit dolor
        nam illo labore eum aspernatur, ducimus quaerat quos quasi quae
        voluptates. Illo, error quaerat quas alias explicabo facilis? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam provident
        dolore aliquam, recusandae unde dicta placeat vitae id modi dolorem
        fugit molestias totam adipisci autem tempora. Excepturi odio
        exercitationem fugit dolor nam illo labore eum aspernatur, ducimus
        quaerat quos quasi quae voluptates. Illo, error quaerat quas alias
        explicabo facilis? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Eum magnam provident dolore aliquam, recusandae unde dicta placeat
        vitae id modi dolorem fugit molestias totam adipisci autem tempora.
        Excepturi odio exercitationem fugit dolor nam illo labore eum
        aspernatur, ducimus quaerat quos quasi quae voluptates. Illo, error
        quaerat quas alias explicabo facilis? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Eum magnam provident dolore aliquam,
        recusandae unde dicta placeat vitae id modi dolorem fugit molestias
        totam adipisci autem tempora. Excepturi odio exercitationem fugit dolor
        nam illo labore eum aspernatur, ducimus quaerat quos quasi quae
        voluptates. Illo, error quaerat quas alias explicabo facilis? Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam provident
        dolore aliquam, recusandae unde dicta placeat vitae id modi dolorem
        fugit molestias totam adipisci autem tempora. Excepturi odio
        exercitationem fugit dolor nam illo labore eum aspernatur, ducimus
        quaerat quos quasi quae voluptates. Illo, error quaerat quas alias
        explicabo facilis? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Eum magnam provident dolore aliquam, recusandae unde dicta placeat
        vitae id modi dolorem fugit molestias totam adipisci autem tempora.
        Excepturi odio exercitationem fugit dolor nam illo labore eum
        aspernatur, ducimus quaerat quos quasi quae voluptates. Illo, error
        quaerat quas alias explicabo facilis? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Eum magnam provident dolore aliquam,
        recusandae unde dicta placeat vitae id modi dolorem fugit molestias
        totam adipisci autem tempora. Excepturi odio exercitationem fugit dolor
        nam illo labore eum aspernatur, ducimus quaerat quos quasi quae
        voluptates. Illo, error quaerat quas alias explicabo facilis?
      </p>
    </div>
  );
}
