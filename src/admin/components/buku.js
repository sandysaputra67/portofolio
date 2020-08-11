import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Books = ({ no, booksData, doUpdate, doDelete }) => {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  //const bookStatus = booksData.bookStatus === "FOR_SELL" ? "info" : "warning";

    useEffect(() => {
      var formData  = new FormData()
       formData.append("kategori_id",data.kategori_id);
      formData.append("title",data.title);
      formData.append("author",data.author);
      formData.append("stok",data.stok);
      formData.append("deskripsi",data.deskripsi);
      formData.append("image_url",data.image_url);
      formData.append("no_isbn",data.no_isbn);
      formData.append("berat",data.berat);
      formData.append("sinopsis",data.sinopsis);
      formData.append("harga",data.harga);
      formData.append("stok",data.stok);
    })
  


  const handleUpdate = (id) => {
    doUpdate(id, data);
    setEdit(false);
  };

  const handleDelete = (id) => {
    doDelete(id);
  };

  const handleForm = (e, formName) => {
    FormData({ ...data, [formName]: e.target.value });
  };

  //console.log(data, "From component");
  return (
    <tr>
      <td style={{ verticalAlign: "middle" }}>{no}</td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              value={data.title}
              onChange={(e) => handleForm(e, "title")}
            />
          </>
        ) : (
          booksData.title
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              value={data.author}
              onChange={(e) => handleForm(e, "author")}
            />
          </>
        ) : (
          booksData.authorName
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              as="textarea"
              rows="3"
              value={data.sinopsis}
              onChange={(e) => handleForm(e, "sinopsis")}
            />
          </>
        ) : (
          booksData.synopsis
        )}

      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              as="select"
              value={data.stok}
              onChange={(e) => handleForm(e, "stok")}
            >
              <option value="ada">ada</option>
              <option value="tidakada">tidakada</option>
            </Form.Control>
          </>
        ) : data.stok === "stok" ? (
          "ada"
        ) : (
          "tidakada"
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Form.Control
              value={data.harga}
              onChange={(e) => handleForm(e, "harga")}
            />
          </>
        ) : (
          booksData.price
        )}
      </td>
      <td style={edit ? { verticalAlign: "top" } : { verticalAlign: "middle" }}>
        {edit ? (
          <>
            <Button
              variant="warning"
              size="sm"
              style={{ marginRight: "5px" }}
              onClick={() => handleUpdate(data._id)}
            >
              <i className="ion-checkmark"></i>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setEdit(false);
                //setData({
                  //title: booksData.title,
                  //authorName: booksData.authorName,
                 // price: booksData.price,
                  //bookStatus: booksData.bookStatus,
                 // synopsis: booksData.synopsis,
                //});
              }}
            >
              <i className="ion-backspace"></i>
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="info"
              size="sm"
              style={{ marginRight: "5px" }}
              onClick={() => setEdit(true)}
            >
              <i className="ion-edit"></i>
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDelete(booksData._id)}
            >
              <i className="ion-android-delete"></i>
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};
export default withRouter(Books);