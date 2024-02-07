import { useEffect, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { PiCaretLeft } from "react-icons/pi";

import { api } from "../../services/api";

import {
  AddImageButton,
  Container,
  Content,
  DescriptionTextarea,
  FieldWrapper,
  FormSection,
  NavigationButton,
  SelectCategoryInput,
  TagSection,
} from "./styles";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { IngredientButton } from "../../components/ingredientButton";
import { Input } from "../../components/input";

export function EditDishe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  const params = useParams();

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

    await api.put(`/products/${params.id}`, {
      name: title,
      ingredients: tags,
      category,
      price,
      description,
    });

    const imageUploadForm = new FormData();
    imageUploadForm.append("image", image);

    await api.patch(`/products/image/${params.id}`, imageUploadForm);

    alert("Produto atualizado com sucesso!");
    navigate(`/details/${params.id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/products/${params.id}`);
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <Header.Root>
        <Header.Menu />
        <Header.Logo />
        <Header.SearchBar />
        <Header.Cart />
        <Header.Logout />
      </Header.Root>

      <Content>
        <NavigationButton onClick={handleBack}>
          <PiCaretLeft size={22} color="white" />
          voltar
        </NavigationButton>

        <h1>Editar prato</h1>

        <FormSection>
          <FieldWrapper>
            <div>
              <span>Imagem do prato</span>

              <AddImageButton htmlFor="disheImage">
                <AiOutlineUpload size={28} color="white" />
                <span>Selecione imagem para alterá-la</span>

                <input
                  type="file"
                  id="disheImage"
                  onChange={handleChangeImage}
                />
              </AddImageButton>
            </div>

            <Input
              label="Nome"
              placeholder="Ex.:Salada Ceasar"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <FieldWrapper>
              <label htmlFor="category">Categoria</label>
              <SelectCategoryInput
                id="category"
                value={category}
                onClick={(e) => setCategory(e.target.value)}
              >
                <option value="refeição">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </SelectCategoryInput>
            </FieldWrapper>
          </FieldWrapper>

          <FieldWrapper>
            <span>Ingredientes</span>

            <TagSection>
              {tags.map((tag, index) => (
                <IngredientButton
                  value={tag}
                  key={String(index)}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <IngredientButton
                isNew
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                placeholder="Adicionar"
              />
            </TagSection>

            <Input
              label="Preço"
              placeholder="R$ 00,00"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="description">Descrição</label>
            <DescriptionTextarea
              id="description"
              value={description}
              cols="30"
              rows="10"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            ></DescriptionTextarea>
          </FieldWrapper>

          <Button onClick={handleAddProduct}>Salvar alterações</Button>
        </FormSection>
      </Content>

      <Footer />
    </Container>
  );
}
