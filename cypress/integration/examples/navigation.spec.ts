/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("https://www.singuerinc.com");
  });

  it("index", () => {
    cy.location("pathname").should("include", "/");
    cy.title().should("eq", "Home | @singuerinc");
    cy.get("header").should("contain.text", "@singuerinc");
    cy.get(".content").should(
      "contain.text",
      "HERE'S WHAT I'VE BEEN WORKING ON"
    );
    cy.get(".sidebar").should("contain", "Home");
    cy.get(".sidebar").should("contain", "About");
    cy.get(".sidebar").should("contain", "GitHub");
    cy.get(".sidebar").should("contain", "Twitter");
    cy.get(".sidebar").should("contain", "Blog");
    cy.get(".sidebar").should("contain", "Medium");
    cy.get(".sidebar").should("contain", "Map");

    cy.get("ul.posts").should("exist");

    [
      "singuerinc-blog",
      "singuerinc-subway",
      "singuerinc-tomeito-app",
      "singuerinc-bi",
      "zalando-ivy-park",
      "b-reel-b-reel",
      "arawys-store",
      "htc-google-vive",
      "facebook-moments",
      "singuerinc-overlay",
      "skoda-byggd-för-att-ta-skit",
      "google-kick-with-chrome",
      "kit-appétit-store",
      "médecins-du-monde-names-not-numbers",
      "roberto-iván-cano-portfolio",
      "cuchi-cuchi-guardería",
      "nike-pro-combat",
      "pepe-jeans-store",
      "nike-my-time-is-now",
      "audi-a1-me-gusta",
      "atrápalo-revívelo",
      "fc-barcelona-som-un",
      "audi-driving-experience",
      "evax-estudio-risa",
      "columna-group-colors",
    ].map((postId) => {
      cy.get(`ul.posts li#${postId} a`)
        .click()
        .then(() => {
          cy.get(".content h1.project-title").should("exist");
          cy.get(".content img").should("exist");

          cy.get(".content .info").then(($info) => {
            cy.wrap($info).contains("My role");
            cy.wrap($info).contains("Date release");
            cy.wrap($info).contains("Client");
            cy.wrap($info).contains("Agency");
            cy.wrap($info).contains("Website");
            // cy.wrap($info).contains("More info");
            cy.wrap($info).contains("Tech");
            // if ($info.find(".info a").length > 0) {
            //   cy.get(".info a").should("have.attr", "target", "_blank");
            // } else {
            //   cy.wrap($info).contains("Unavailable");
            // }
          });
          cy.get(".project-content").should("exist");

          cy.get(".content").contains("Share");
          cy.get(".content a.facebook").should("exist");
          cy.get(".content a.twitter").should("exist");

          cy.get(".content").contains("Twitter");
          cy.get(".content").contains("Facebook");
          cy.get(".content").contains("Related");
        })
        .go("back");
    });
  });
});
