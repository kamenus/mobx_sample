export default function CardStore() {
  return {
    cards: [],
    cardToEdit: null,
    fetchUrl: 'https://reqres.in/api/users',
    currentPage: 1,
    pages: 0,
    get getCards() {
      return this.cards;
    },
    async fetchCards() {
      const url = `${this.fetchUrl}/?page=${this.currentPage}`;
      const result = await fetch(url);
      const jsonData = await result.json();
      this.setCards(jsonData.data);
      this.currentPage = jsonData.page;
      this.pages = jsonData.total_pages;
    },
    setCards(cards) {
      this.cards = [ ...cards ];
    },
    setPage(page) {
      this.currentPage = page;
      this.fetchCards();
    },
    resetCardToEdit() {
      this.cardToEdit = null;
    },
    setCardToEdit(id) {
      this.cardToEdit = { ...this.getCards.find(card => card.id === id) };
    },
    async removeCard(id) {
      const url = `${this.fetchUrl}/${id}`;
      await fetch(url, {
        method: 'DELETE',
      })
      .then(resp => {
        console.log('remove succ: ', resp);
        this.cardToEdit = null;
      })
      .catch(resp => console.error(resp));
    },
    async updateCard(id) {
      const url = `${this.fetchUrl}/${id}`;
      await fetch(url, {
        method: 'PUT',
        data: JSON.stringify(this.cardToEdit)
      })
      .then(resp => {
        console.log('update succ: ', resp);
        this.cardToEdit = null;
      })
      .catch(resp => console.error(resp));
    },
    async createCard() {
      const url = this.fetchUrl;
      await fetch(url, {
        method: 'POST',
        data: JSON.stringify(this.cardToEdit)
      })
      .then(resp => {
        console.log('create succ: ', resp);
        this.cardToEdit = null;
      })
      .catch(resp => console.error(resp));
    },
  }
}
