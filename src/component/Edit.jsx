import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Edit() {
  const check = () => {
    if (title === "" || price === 0)
      return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
  };

  let { productID } = useParams();

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/products/${productID}`)
      .then((res) => {
        const data = res.data;
        settitle(data.title);
        setprice(data.price);
      })
      .catch(() => {
        settitle("");
        setprice(0);
      });

    return () => {
      settitle("");
      setprice(0);
    };
  }, [productID]);

  let navigate = useNavigate();
  const handleinput = (e) => {
    e.preventDefault();
    if (title === "" || price === 0) return;

    axios
      .put(`http://localhost:9000/products/${productID}`, {
        title: title,
        price: price,
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    navigate("/products");
  };

  return (
    <form onSubmit={handleinput}>
      <div class="mb-3">
        <label htmlFor="title" class="form-label">
          title
        </label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
      </div>

      <div class="mb-3">
        <label htmlFor="price" class="form-label">
          price
        </label>
        <input
          type="number"
          class="form-control"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => {
          check();
        }}
      >
        Edit
      </button>
    </form>
  );
}

export default Edit;
