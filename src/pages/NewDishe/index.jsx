import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { PiCaretLeft } from "react-icons/pi";

import { api } from "../../services/api";

import {
  AddImageButton,
  ConfirmButton,
  Container,
  DescriptionTextarea,
  FormFirstSection,
  FormSecondSection,
  FormSection,
  InputWrapper,
  Main,
  NavigationButton,
  SelectCategoryInput,
  TagSection,
} from "./styles";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { IngredientButton } from "../../components/ingredientButton";
import { Input } from "../../components/input";

export function NewDishe() {
  let productId = "";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleAddTag() {
    if (newTag === "") {
      return;
    }

    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function handleAddProduct() {
    if (!title) {
      return alert("Digite um nome para o produto.");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar.");
    }

    if (!description) {
      return alert("Digite uma descrição para o produto.");
    }

    if (!price) {
      return alert("Digite um preço para o produto.");
    }

    if (!category) {
      return alert("Selecione uma categoria para o produto.");
    }

    const productData = await api.post("/products", {
      name: title,
      ingredients: tags,
      category,
      price,
      description,
    });

    productId = productData.data.product_id;

    const imageUploadForm = new FormData();
    imageUploadForm.append("image", image);

    const productImageURL = await api.patch(
      `/products/image/${productId}`,
      imageUploadForm
    );

    alert("Produto criado com sucesso!");
    navigate(`/details/${productId}`);
  }

  return (
    <Container>
      <Header.Root>
        <Header.Menu />
        <Header.Logo />
        <Header.SearchBar />
        <Header.Cart />
        <Header.Logout />
      </Header.Root>

      <Main>
        <NavigationButton onClick={handleBack}>
          <PiCaretLeft size={22} color="white" />
          voltar
        </NavigationButton>

        <h1>Adicionar prato</h1>

        <FormSection>
          <FormFirstSection>
            <InputWrapper>
              <span>Imagem do prato</span>

              <AddImageButton htmlFor="disheImage">
                <AiOutlineUpload size={28} color="white" />
                <span>Selecione imagem</span>

                <input
                  type="file"
                  id="disheImage"
                  onChange={handleChangeImage}
                />
              </AddImageButton>
            </InputWrapper>

            <InputWrapper>
              <Input
                label="Nome"
                placeholder="Ex.:Salada Ceasar"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="category">Categoria</label>
              <SelectCategoryInput
                id="category"
                onClick={(e) => setCategory(e.target.value)}
              >
                <option value="refeição">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </SelectCategoryInput>
            </InputWrapper>
          </FormFirstSection>

          <FormSecondSection>
            <InputWrapper>
              <span>Ingredientes</span>

              <TagSection>
                {tags.map((tag, index) => (
                  <IngredientButton
                    className="ingredient-button"
                    value={tag}
                    key={String(index)}
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                ))}

                <IngredientButton
                  isNew
                  className="ingredient-button"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                  placeholder="Adicionar"
                />
              </TagSection>
            </InputWrapper>

            <InputWrapper>
              <Input
                label="Preço"
                placeholder="R$ 00,00"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputWrapper>
          </FormSecondSection>

          <InputWrapper>
            <label htmlFor="description">Descrição</label>
            <DescriptionTextarea
              id="description"
              cols="30"
              rows="10"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            ></DescriptionTextarea>
          </InputWrapper>

          <ConfirmButton>
            <Button onClick={handleAddProduct}>Salvar alterações</Button>
          </ConfirmButton>
        </FormSection>
      </Main>

      <Footer />
    </Container>
  );
}
