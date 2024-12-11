describe('OrderForm', () => {
    it('should create an order successfully', () => {
      cy.visit('http://localhost:5173'); // URL du front React
  
      // Remplir le formulaire
      cy.get('input[placeholder="Customer Name"]').type('John Doe');
      cy.get('input[placeholder="Items (comma-separated)"]').type('item1,item2');
  
      // Soumettre le formulaire
      cy.get('button[type="submit"]').click();
  
      // Vérifier le message de succès
      cy.contains('Order created with ID').should('be.visible');
    });
  
    it('should display an error if Customer Name is empty', () => {
      cy.visit('http://localhost:5173');
    
      // Remplit les items mais laisse le champ Customer Name vide
      cy.get('input[placeholder="Items (comma-separated)"]').type('item1,item2');
    
      // Soumet le formulaire
      cy.get('button[type="submit"]').click();
    
      // Vérifie que le message d'erreur est affiché
      cy.contains('Failed to create order.').should('be.visible');
    });
  });