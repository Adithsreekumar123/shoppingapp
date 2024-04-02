import React from 'react'

export const Header = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ShoppingApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">ListItems</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\buy">Buy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\cancel">Cancel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\replace">ReplaceItem</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}
