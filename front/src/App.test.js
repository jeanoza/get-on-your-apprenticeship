import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

describe("Landing Page", () => {
  beforeEach(() => {
    mount(<App />);
  });
  it("renders Landing Page", () => {
    cy.get("h1").contains("Welcome to Hogwarts");
  });
  it("has Landing header", () => {
    cy.get("#Landing-Header").should("have.length", 1);
    cy.get("#Landing-Header>div").should("have.length", 3);
  });
  it("has navbar which has 3 links buttons", () => {
    cy.get("#Navbar").should("have.length", 1);
    cy.get("#Navbar>a").should("have.length", 3);
  });
  it("go to Landing page when click first button", () => {
    cy.get("#Navbar>a").eq(0).click();
    cy.get("h1").contains("Welcome to Hogwarts");
  });
  it("go to students page when click second button", () => {
    cy.get("#Navbar>a").eq(1).click();
    cy.get("p").contains("Here is a list of all students");
  });
  it("go to random student page when click third button", () => {
    cy.get("#Navbar>a").eq(2).click();
    cy.get("p").contains("Here is a student seleted by random choice");
  });
});

describe("Students Page", () => {
  beforeEach(() => {
    mount(<App />);
    cy.get("#Navbar>a").eq(1).click();
  });
  it("renders Students Page", () => {
    cy.get("p").contains("Here is a list of all students");
  });
  it("change p text and table content when client click Gryffindor button", () => {
    cy.get("#Buttons>a").eq(0).click();
    cy.get("p").contains("Here is a list of Gryffindor students");
    cy.get("#Students-Table > tbody > tr").should("have.length", 10);
  });
  it("change p text and table content when client click Slytherin button", () => {
    cy.get("#Buttons>a").eq(1).click();
    cy.get("p").contains("Here is a list of Slytherin students");
    cy.get("#Students-Table > tbody > tr").should("have.length", 9);
  });
  it("change p text and table content when client click Hufflepuff button", () => {
    cy.get("#Buttons>a").eq(2).click();
    cy.get("p").contains("Here is a list of Hufflepuff students");
    cy.get("#Students-Table > tbody > tr").should("have.length", 1);
  });
  it("change p text and table content when client click Ravenclaw button", () => {
    cy.get("#Buttons>a").eq(3).click();
    cy.get("p").contains("Here is a list of Ravenclaw students");
    cy.get("#Students-Table > tbody > tr").should("have.length", 2);
  });
});

describe("Random Student Page", () => {
  beforeEach(() => {
    mount(<App />);
    cy.get("#Navbar>a").eq(2).click();
  });
  it("renders Students Page", () => {
    cy.get("p").contains("Here is a student seleted by random choice");
  });
  it("show only one person selected by random", () => {
    cy.get("#Students-Table > tbody > tr").should("have.length", 1);
  });
});
