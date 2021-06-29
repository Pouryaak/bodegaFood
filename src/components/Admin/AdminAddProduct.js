import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Grid,
  Input,
  Modal,
  Transition,
} from "semantic-ui-react";
import { addProduct } from "../../features/productsSlice";
import { db } from "../../firebase";
import { ToastContainer, toast, Slide } from "react-toastify";

const getBase64 = (file) => {
  return new Promise((resolve) => {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };
  });
};

const categoryOptions = [
  { key: "food", value: "food", text: "Food" },
  { key: "kebab", value: "kebab", text: "Kebab" },
  { key: "sandwich", value: "sandwich", text: "Sandwich" },
  { key: "stews", value: "stews", text: "Stews" },
  { key: "breakfast", value: "breakfast", text: "Breakfast" },
  { key: "dairy", value: "dairy", text: "Dairy" },
  { key: "drinks", value: "drinks", text: "Drinks" },
  { key: "sides", value: "sides", text: "Sides" },
  { key: "sales", value: "sales", text: "Sales" },
  { key: "diet", value: "diet", text: "Diet" },
];

function AdminAddProduct({ open, openModal, closeModal }) {
  const [prodSale, setProdSale] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [prodImage, setProdImage] = useState("");
  const [adding, setAdding] = useState(false);

  const dispatch = useDispatch();

  const onAddProd = () => {
    setAdding(true);

    db.collection("products")
      .add({
        name,
        description,
        category,
        price,
        salePrice,
        sale: prodSale,
        image: prodImage,
      })
      .then((doc) => {
        dispatch(
          addProduct({
            prodId: doc.id,
            name,
            description,
            category,
            price,
            salePrice,
            sale: prodSale,
            image: prodImage,
          })
        );
        setAdding(false);
        toast.success("✅ New product added!");
        closeModal();
        setProdSale(false);
        setName("");
        setDescription("");
        setCategory("");
        setPrice("");
        setSalePrice("");
        setProdImage("");
      });
  };

  const onFileUpload = (e) => {
    let file = e.target.files[0];
    getBase64(file).then((res) => {
      setProdImage(res);
    });
  };

  return (
    <>
      <Modal open={open} onClose={closeModal}>
        <Modal.Header>Add Product</Modal.Header>
        <Modal.Content>
          <Form>
            <Grid>
              <Grid.Column width={8}>
                <Form.Field>
                  <label>Product Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                </Form.Field>
                <Form.TextArea
                  label="Product Description"
                  value={description}
                  onChange={(e, { value }) => setDescription(value)}
                />
                <Form.Field>
                  <label>Product Category</label>
                  <Dropdown
                    fluid
                    multiple
                    selection
                    search
                    options={categoryOptions}
                    placeholder="Please choose category"
                    onChange={(e, { value }) => setCategory(value)}
                  />
                </Form.Field>
                <Form.Group widths="equal">
                  <Form.Field>
                    <label>Product Price</label>
                    <Input
                      label="RM"
                      type="number"
                      value={price}
                      onChange={(e, { value }) => setPrice(value)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Product Sale</label>
                    <Checkbox
                      onChange={() => setProdSale(!prodSale)}
                      checked={prodSale}
                      toggle
                      color="blue"
                    />
                  </Form.Field>
                </Form.Group>
                <Transition visible={prodSale} animation="drop" duration={500}>
                  <Form.Field>
                    <label>Sale Price</label>
                    <Input
                      label="RM"
                      type="number"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                    />
                  </Form.Field>
                </Transition>
              </Grid.Column>
              <Grid.Column width={8}>
                <Form.Field>
                  <label>Product Image</label>
                  <input onChange={onFileUpload} type="file" />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button color="green" onClick={onAddProd} loading={adding}>
            Add
          </Button>
        </Modal.Actions>
      </Modal>
      <ToastContainer transition={Slide} autoClose={2000} />
    </>
  );
}

export default AdminAddProduct;
