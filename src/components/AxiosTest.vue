<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(request => {
  request.headers.Authorization = 'Bearer 123456789'
  return request
})

const products = ref([])
async function getProducts() {
  try {
    const { data } = await axios.get('/products')
    products.value = data
  } catch (error) {
    products.value = []
  }
}

const product = ref(null)
const productId = ref(1)
const newName = ref('')
async function getProduct(id) {
  productId.value = id
  try {
    const { data } = await axios.get(`/products/${id}`)
    product.value = data
    newName.value = data.name
  } catch (error) {
    product.value = null
  }
}

const productName = ref('')
const productPrice = ref(0)
async function createProduct(name, price) {
  try {
    await axios.post('/products', { name, price })
    loadData()
  } catch (error) { }
}

async function updateProductName(id, name) {
  try {
    await axios.patch(`/products/${id}`, {
      name,
    })
    loadData()
  } catch (error) { }
}

async function deleteProduct(id) {
  try {
    await axios.delete(`/products/${id}`)
    loadData()
  } catch (error) { }
}

function loadData() {
  getProducts()
  getProduct(productId.value)
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <h2>Axios Test</h2>
  <p>
    <h4>
      Get Products
      <button @click="getProducts">Get all</button>
    </h4>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        <ul>
          <li>ID: {{ product.id }}</li>
          <li>Name: {{ product.name }}</li>
          <li>Material: {{ product.material }}</li>
          <li>Price: {{ product.price }}</li>
          <button @click="getProduct(product.id)">Change</button>
          <button @click="deleteProduct(product.id)">Delete</button>
        </ul>
      </li>
    </ul>
  </p>

  <p>
    <h4>
      Get Product
      <input type="number" v-model="productId" />
      <button @click="getProduct(productId)">Get</button>
    </h4>
    <div v-if="product">
      <ul>
        <li>ID: {{ product.id }}</li>
        <li>Name: {{ product.name }}</li>
        <li>New Name: <input v-model="newName" /></li>
        <li>Material: {{ product.material }}</li>
        <li>Price: {{ product.price }}</li>
      </ul>
      <button @click="updateProductName(product.id, newName)">Update</button>
    </div>
  </p>

  <p>
    <h4>Create Product</h4>
    <div>
      Name: <input v-model="productName" />
    </div>
    <div>
      Price: <input type="number" v-model="productPrice" />
    </div>
    <button @click="createProduct(productName, productPrice)">Create</button>
  </p>
</template>
