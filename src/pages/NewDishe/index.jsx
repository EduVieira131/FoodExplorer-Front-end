import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { PiCaretLeft } from "react-icons/pi";

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

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { IngredientButton } from "../../components/ingredientButton";
import { Input } from "../../components/input";

export function NewDishe() {
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

        <h1>Adicionar prato</h1>

        <FormSection>
          <FieldWrapper>
            <div>
              <span>Imagem do prato</span>

              <AddImageButton htmlFor="disheImage">
                <AiOutlineUpload size={28} color="white" />
                <span>Selecione imagem</span>

                <input type="file" id="disheImage" />
              </AddImageButton>
            </div>

            <Input label="Nome" placeholder="Ex.:Salada Ceasar" type="text" />

            <FieldWrapper>
              <label htmlFor="category">Categoria</label>
              <SelectCategoryInput id="category">
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

            <Input label="Preço" placeholder="R$ 00,00" type="number" />
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="description">Descrição</label>
            <DescriptionTextarea
              id="description"
              cols="30"
              rows="10"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></DescriptionTextarea>
          </FieldWrapper>

          <Button>Salvar alterações</Button>
        </FormSection>
      </Content>

      <Footer />
    </Container>
  );
}
