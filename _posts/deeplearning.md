---
title: "Understanding the Core Concepts of Deep Learning with MIT 6.S191"
excerpt: "Join me on a journey through the foundational principles of deep learning as taught in the MIT 6.S191 course. From perceptrons to regularization, we explore the mechanics that power neural networks today."
coverImage: "/assets/blog/deep-learning-journey/cover.jpg"
date: "2025-04-29T10:00:00.000Z"
author:
  name: Breye
  picture: "/assets/blog/authors/breye.jpeg"
ogImage:
  url: "/assets/blog/deep-learning-journey/cover.jpg"
---

## 🧠 The Building Block: Perceptron

The perceptron is the simplest type of artificial neuron. It's modeled after biological neurons and takes weighted inputs, adds a bias, and passes the result through an **activation function**.

**Forward propagation** for a single perceptron can be written as:

```math
z = \sum_{i=1}^{n} w_i x_i + b \\
a = \phi(z)

Where:
•	xix_ixi are input features
•	wiw_iwi are weights
•	bbb is the bias
•	ϕ\phiϕ is the activation function
Activation functions introduce non-linearity, such as:
•	Sigmoid: σ(z)=11+e−z\sigma(z) = \frac{1}{1 + e^{-z}}σ(z)=1+e−z1
•	ReLU: ReLU(z)=max⁡(0,z)\text{ReLU}(z) = \max(0, z)ReLU(z)=max(0,z)
```
## 📈 Graph code for activation functions:

<!-- import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-10, 10, 100)
sigmoid = 1 / (1 + np.exp(-x))
relu = np.maximum(0, x)

plt.plot(x, sigmoid, label="Sigmoid")
plt.plot(x, relu, label="ReLU")
plt.legend()
plt.title("Activation Functions")
plt.grid(True)
plt.savefig("activation_functions.png") -->

## 🕸️ Expanding the Web: Neural Networks
A neural network consists of layers of neurons. Each hidden layer performs a transformation on its inputs using dense connections (fully connected layers).

```math
a(l)=ϕ(W(l)a(l−1)+b(l))a^{(l)} = \phi(W^{(l)} a^{(l-1)} + b^{(l)}) a(l)=ϕ(W(l)a(l−1)+b(l)) 
Where:
•	lll is the layer index
•	a(l)a^{(l)}a(l) is the activation of layer lll
```

## 📉 Loss Functions: Measuring the Error
The loss function quantifies the difference between predicted and true values. Common types include:
**Mean Squared Error (MSE):**
```math
L=1n∑i=1n(yi−y^i)2L = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2L=n1∑i=1n(yi−y^i)2
```
**Cross-Entropy Loss (for classification):**
```math
	
L=−∑ylog⁡(y^)L = -\sum y \log(\hat{y})L=−∑ylog(y^)
```

## 🎯 Optimization: Gradient Descent
We minimize the loss using gradient descent, which updates weights to reduce the error:
w:=w−η∂L∂ww := w - \eta \frac{\partial L}{\partial w} w:=w−η∂w∂L 
Where η\etaη is the learning rate.
Variants include:
•	Stochastic Gradient Descent (SGD): uses a random mini-batch
•	Mini-Batch Gradient Descent: faster, uses subset of data
•	Adaptive methods: e.g., Adam optimizer
## 📉 Graph code for different learning rates:

import matplotlib.pyplot as plt

x = np.arange(0, 50)
lr1 = np.exp(-0.05 * x)
lr2 = np.exp(-0.01 * x)

plt.plot(x, lr1, label="Fast Decay (η=0.05)")
plt.plot(x, lr2, label="Slow Decay (η=0.01)")
plt.title("Effect of Learning Rates")
plt.xlabel("Epochs")
plt.ylabel("Loss")
plt.legend()
plt.grid(True)
plt.savefig("learning_rate_effects.png")

## 🧩 Generalization and Overfitting
A network that memorizes training data but performs poorly on new data is said to overfit.
## 🔧 Regularization Techniques:
•	Dropout: Randomly deactivates neurons during training
•	Early stopping: Halts training when validation loss stops improving
## 📉 Graph code for overfitting vs generalization:

epochs = np.arange(1, 21)
train_loss = np.exp(-0.3 * epochs)
val_loss = np.exp(-0.3 * epochs) + 0.02 * (epochs > 10) * (epochs - 10)

plt.plot(epochs, train_loss, label="Training Loss")
plt.plot(epochs, val_loss, label="Validation Loss")
plt.axvline(10, color='r', linestyle='--', label="Early Stopping")
plt.legend()
plt.title("Overfitting vs Generalization")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.grid(True)
plt.savefig("overfitting_regularization.png")

## 🧭 Final Thoughts
This MIT 6.S191 session was a deep dive into the fundamental mechanics of deep learning. From perceptrons to adaptive learning and generalization, it laid the groundwork for building intelligent systems.
Stay tuned for more as I continue my journey through this series and dive into more advanced topics like convolutional networks, sequence models, and more!

## 👨‍💻 If you want to learn along, check out: MIT 6.S191 Intro to Deep Learning
________________________________________
Written by Breye.
