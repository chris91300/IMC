import { render, screen } from "@testing-library/react";
import Introduction from "../Introduction";


describe("TEST OF THE COMPONENT INTRODUCTION", () => {
    it("should return the two paragraph", () => {
        render(<Introduction />)

        const boldTextOnFirstParagraph = screen.getByText(/Indice de Masse Corporelle/)
        const firstParagraph = screen.getByText(/ou IMC \( en anglais, BMI \) est une grandeur qui permet d'estimer la corpulence d'une personne./)

        const secondParagraph = screen.getByText("Il permet de diagnostiquer la maigreur, le surpoids ou l'obésité. Il se calcule en fonction de la taille et de la masse corporelle.")
        
        expect(boldTextOnFirstParagraph).toBeInTheDocument()
        expect(firstParagraph).toBeInTheDocument()
        expect(secondParagraph).toBeInTheDocument()
    })
})