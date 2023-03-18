class LocalStorageHandler {

    constructor(keyName) {
      this.keyName = keyName
    }
  
    getItems() {
      const items = localStorage.getItem(this.keyName);
      return items ? JSON.parse(items) : []
    }
  
    setItems(items) {
      localStorage.setItem(this.keyName, JSON.stringify(items))
    }
  
    addItem(item) {
      const items = this.getItems()
      items.push(item)
      this.setItems(items)
    }
  
    updateItem(id, data) {
      const items = this.getItems()
      const index = items.findIndex(item => item.id === id)
      if (index >= 0) {
        items[index] = { ...items[index], ...data }
        this.setItems(items)
      }
    }
  
    removeItem(id) {
      const items = this.getItems()
      const index = items.findIndex(item => item.id === id)
      if (index >= 0) {
        items.splice(index, 1)
        this.setItems(items)
      }
    }
  }
  