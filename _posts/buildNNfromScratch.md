---
title: "Building a Neural Network from Scratch for MNIST Digit Classification"
excerpt: "Join me on my journey to build a neural network from scratch. Neural Networks are fascinating fruits of mathematics that find their application in Deep learning. Understanding the fundamentals concepts is crucial. I engaged myself in the project of building a neural network to solve an actual machine learning problem using only python and numpy library. In order to grasp the full concepts we need to be able to build it from scratch"
coverImage: "/assets/blog/nnfromscratch/cover.jpg"
date: "2025-04-30T10:00:00.000Z"
author:
  name: Breye Foka
  picture: "/assets/blog/authors/breye.png"
ogImage:
  url: "/assets/blog/nnfromscratch/cover.jpg"
---


## **🧠 Building a Neural Network from Scratch for MNIST Digit Classification**

## **🏁 Introduction: The Problem We Want to Solve**

The MNIST dataset is a classic benchmark in machine learning, consisting of **70,000 grayscale images of handwritten digits** (0 through 9). Each image is **28x28 pixels**, unrolled into a **784-dimensional vector**. Our task is to build a **neural network from scratch using only NumPy** to classify these digits correctly. This project is a deep dive into how deep learning works under the hood — without relying on high-level libraries like TensorFlow or PyTorch.


## **🧱 Network Architecture**

We build a **3-layer neural network** with the following structure:

- **Input Layer**: 784 neurons (one per pixel)
- **Hidden Layer**: 10 neurons (using ReLU activation)
- **Output Layer**: 10 neurons (one for each digit, using softmax activation)

Mathematically:

- Input vector $ X \in \mathbb{R}^{784}  $
- Hidden layer weights $W_1 \in \mathbb{R}^{10 \times 784}$ , biases  $b_1 \in \mathbb{R}^{10 \times 1}$ 
- Output layer weights $W_2 \in \mathbb{R}^{10 \times 10}$ , biases $b_2 \in \mathbb{R}^{10 \times 1}$ 

---

## **🧹 Data Preparation**

We begin by loading and preprocessing the MNIST dataset:
```python
data = pd.read_csv("./train.csv").to_numpy()
np.random.shuffle(data)

data_dev = data[0:1000].T
Y_dev = data_dev[0]
X_dev = data_dev[1:] / 255.

data_train = data[1000:].T
Y_train = data_train[0]
X_train = data_train[1:] / 255.
```
Here:
We normalize pixel values to [0, 1] and transpose the data for matrix-based operations: each column is a training example

## **🔢 One-Hot Encoding**
To make our labels usable for softmax and cross-entropy loss, we convert them to one-hot vectors:

```python
def one_hot(Y):
    one_hot_Y = np.zeros((Y.size, Y.max()+1))
    one_hot_Y[np.arange(Y.size), Y] = 1
    return one_hot_Y.T
```
This allows us to compute a meaningful difference between predicted probabilities and actual class labels.

## **🔁 Forward Propagation**
In the forward pass, we compute activations layer by layer:

1. **Hidden layer (ReLU activation)**:
$$ 
Z_1 = W_1X + b_1
$$

$$
    A_1=ReLU(Z_1)=\max(0, Z_1)
$$

2. **Output layer (Softmax activation):**
$$
    Z_2 = W_2A_1+b_2
$$
$$
\text{Softmax}(Z)_i = \frac{e^{Z_i - \max(Z)}}{\sum_{j} e^{Z_j - \max(Z)}}
$$

``` python
# ReLu function Implementation
def ReLU(Z): return np.maximum(0, Z)
#Softmax function implementation
def softmax(Z):
    A = np.exp(Z - np.max(Z))
    return A / A.sum(axis=0, keepdims=True)
```
## **🎯 Loss Function (Cross-Entropy)**
To evaluate our predictions, we use cross-entropy loss:
$$
L = - \frac{1}{m} \sum_{i=1}^{m} Y_i \cdot \log(\hat{Y}_i)
$$

## **🔁 Backpropagation**
We compute gradients to update weights:

*Output layer:*
$$
dZ^{[2]} = A^{[2]} - Y
$$
$$
dW^{[2]} = \frac{1}{m} dZ^{[2]} (A^{[1]})^T
$$
$$
db^{[2]} = \frac{1}{m} \sum dZ^{[2]}
$$
 
Hidden layer:
$$
dZ^{[1]} = (W^{[2]})^T dZ^{[2]} \circ g^{[1]'}(Z^{[1]})
$$

$$
dZ^{[1]} = (W^{[2]})^T dZ^{[2]} \circ \text{ReLU}'(Z^{[1]})
$$
$$
dW^{[1]} = \frac{1}{m} dZ^{[1]} X^T
$$
$$
db^{[1]} = \frac{1}{m} \sum dZ^{[1]}
$$

Implementing the function in python
```python
def ReLU_deriv(Z): return Z > 0
```
## **📦 Parameter Update (Gradient Descent)**
Using a learning rate $\alpha$, we update weights:
$$
W := W - \alpha \cdot dW
$$
$$
b := b - \alpha \cdot db
$$

## **🔁 Training Loop**
```python

for i in range(iterations):
    Z1 = W1 @ X + b1
    A1 = ReLU(Z1)
    Z2 = W2 @ A1 + b2
    A2 = softmax(Z2)

    # Backprop
    one_hot_Y = one_hot(Y)
    dZ2 = A2 - one_hot_Y
    dW2 = dZ2 @ A1.T / m
    db2 = np.sum(dZ2, axis=1, keepdims=True) / m

    dZ1 = (W2.T @ dZ2) * ReLU_deriv(Z1)
    dW1 = dZ1 @ X.T / m
    db1 = np.sum(dZ1, axis=1, keepdims=True) / m

    # Update
    W1 -= alpha * dW1
    b1 -= alpha * db1
    W2 -= alpha * dW2
    b2 -= alpha * db2
```
## **🧪 Evaluation and Prediction**
```python
def predict(X):
    Z1 = W1 @ X + b1
    A1 = ReLU(Z1)
    Z2 = W2 @ A1 + b2
    A2 = softmax(Z2)
    return np.argmax(A2, axis=0)

def accuracy(preds, Y):
    return np.mean(preds == Y) * 100
```
This gives us the model’s accuracy on development data.

## **🧠 Final Thoughts**
This project demonstrates how a neural network works from the ground up:

We built each component from scratch

No frameworks — just math and NumPy

You now understand how forward and backpropagation drive the learning process

## **📌 Next Steps**
Add more layers or try different activation functions

Implement regularization

Build a version with PyTorch or TensorFlow and compare

Thanks for reading! Have feedback, improvements, or want to collaborate? Let’s connect!