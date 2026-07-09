import React from "react";
import { render , screen  } from '@testing-library/react'
import "@testing-library/jest-dom"
import Hero from "../landing_page/home/Hero";

describe("Hero Compenent", () => {
    test("render Hero images",() => {
        render( <Hero /> );
        const heroImage = screen.getByAltText("HERO IMG");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src" , "media/images/homeHero.png"); 
    });
});