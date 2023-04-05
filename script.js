// MODAL JS
const modal = {
  selectors: {
    modal: 'modal',
    openModalBtn: 'js-modal-open',
    closeModalBtn: 'js-modal-close',
    formWrapper: 'js-modal-form-wrapper',
    formEl: 'modal__form',
    inputWrapper: 'modal__input-wrapper',
    nameInput: 'modal-name',
    emailInput: 'modal-email',
    companyInput: 'modal-company',
    phoneInput: 'modal-phone',
    messageInput: 'modal-message',
    consentInput: 'modal-consent',
    submitBtnWrapper: 'modal__submit-btn-wrapper',
    submitBtn: 'modal__submit-btn',
  },
  inputsPlaceholder: 'Type here',
  consentLabel: 'I consent to Elite Hands contacting me regarding the message I sent. Read more in our Privacy Policy',
  submitIcon: 'assets/arrow.svg',
  formElements: {
    formEl: null,
    nameWrapper: null,
    nameLabel: null,
    nameInput: null,
    emailWrapper: null,
    emailLabel: null,
    emailInput: null,
    companyWrapper: null,
    companyLabel: null,
    companyInpu: null,
    phoneWrapper: null,
    phoneLabel: null,
    phoneInput: null,
    messageWrapper: null,
    messageLabel: null,
    messageInpu: null,
    consentWrapper: null,
    consentInput: null,
    consentLabe: null,
    submitBtnWrapper: null,
    submitBtn: null,
    submitIcon: null
  }
}

// Elements
const modalEl = document.querySelector(`.${modal.selectors.modal}`)
const openModalBtn = document.querySelector(`.${modal.selectors.openModalBtn}`)
const closeModalBtn = document.querySelector(`.${modal.selectors.closeModalBtn}`)
const formWrapper = document.querySelector(`.${modal.selectors.formWrapper}`)

// Form elements data
const formElementsData = {
  formEl: {
    tag: 'FORM',
    classes: [modal.selectors.formEl],
    appendTo: formWrapper
  },
  nameWrapper: {
    tag: 'DIV',
    classes:[modal.selectors.inputWrapper]
  },
  nameLabel: {
    tag: 'LABEL',
    htmlFor: modal.selectors.nameInput,
    text: 'Name & Surname*'
  },
  nameInput: {
    tag: 'INPUT',
    id: modal.selectors.modalEmalInput,
    type: 'text',
    required: true,
    placeholder: modal.inputsPlaceholder
  },
  emailWrapper: {
    tag: 'DIV',
    classes:[modal.selectors.inputWrapper]
  },
  emailLabel: {
    tag: 'LABEL',
    htmlFor: modal.selectors.emailInput,
    text: 'Email*'
  },
  emailInput: {
    tag: 'INPUT',
    id: modal.selectors.emailInput,
    type: 'text',
    required: true,
    placeholder: modal.inputsPlaceholder
  },
  companyWrapper: {
    tag: 'DIV',
    classes:[modal.selectors.inputWrapper]
  },
  companyLabel: {
    tag: 'LABEL',
    htmlFor: modal.selectors.companyInput,
    text: 'Company'
  },
  companyInput: {
    tag: 'INPUT',
    id: modal.selectors.companyInput,
    type: 'text',
    placeholder: modal.inputsPlaceholder
  },
  phoneWrapper: {
    tag: 'DIV',
    classes:[modal.selectors.inputWrapper]
  },
  phoneLabel: {
    tag: 'LABEL',
    htmlFor: modal.selectors.phoneInput,
    text: 'Phone'
  },
  phoneInput: {
    tag: 'INPUT',
    id: modal.selectors.phoneInput,
    type: 'text',
    placeholder: modal.inputsPlaceholder
  },
  messageWrapper: {
    tag: 'DIV',
    classes:[modal.selectors.inputWrapper, `${modal.selectors.inputWrapper}--message`]
  },
  messageLabel: {
    tag: 'LABEL',
    htmlFor: modal.selectors.messageInput,
    text: 'Message'
  },
  messageInput: {
    tag: 'TEXTAREA',
    id: modal.selectors.messageInput,
    type: 'text',
    placeholder: modal.inputsPlaceholder
  },
  consentWrapper: {
    tag: 'DIV',
    classes:[modal.selectors.inputWrapper, `${modal.selectors.inputWrapper}--consent`]
  },
  consentLabel: {
    tag: 'LABEL',
    htmlFor: modal.selectors.consentInput,
    text: modal.consentLabel
  },
  consentInput: {
    tag: 'INPUT',
    id: modal.selectors.consentInput,
    type: 'checkbox',
    placeholder: modal.inputsPlaceholder
  },
  submitBtnWrapper: {
    tag: 'DIV',
    classes:[modal.selectors.submitBtnWrapper]
  },
  submitBtn: {
    tag: 'BUTTON',
    classes: [modal.selectors.submitBtn],
    text: 'Contact Us'
  },
  submitIcon: {
    tag: 'IMG',
    src: modal.submitIcon,
    alt: 'arrow'
  }
}

// Functions
const openModal = () => {
  modalEl.style.display = 'block'
  document.body.style.overflow = "hidden";
  createForm()
}

const closeModal = () => {
  modalEl.style.display = 'none'
  document.body.style.overflow = "auto";

  // delete Form from DOM
  deleteElement(modal.formElements.formEl)
  
  // Revert all values to null
  for (const [key] of Object.entries(modal.formElements)) {
    modal.formElements[key] = null
  }
}

const createElement = ({tag, classes, appendTo, text, htmlFor, id, type, required, placeholder, src, alt}) => {
  const element = document.createElement(tag)
  if(classes) {classes.forEach(className => element.classList.add(className))}
  if(text) {element.innerText = text}
  if(htmlFor) {element.setAttribute('for', htmlFor)}
  if(id) {element.setAttribute('id', id)}
  if(type) {element.setAttribute('type', type)}
  if(required) {element.required = true}
  if(placeholder) {element.setAttribute('placeholder', placeholder)}
  if(src) {element.setAttribute('src', src)}
  if(alt) {element.setAttribute('alt', alt)}
  appendTo.appendChild(element)
  return element
}

const deleteElement = (element) => {
  element.remove()
}

const createForm = () => {

  // Create form
  modal.formElements.formEl = createElement({...formElementsData.formEl})

  // Name
  modal.formElements.nameWrapper = createElement({...formElementsData.nameWrapper, appendTo: modal.formElements.formEl})
  modal.formElements.nameLabel = createElement({...formElementsData.nameLabel, appendTo: modal.formElements.nameWrapper})
  modal.formElements.nameInput = createElement({...formElementsData.nameInput, appendTo: modal.formElements.nameWrapper})

  // Email
  modal.formElements.emailWrapper = createElement({...formElementsData.emailWrapper, appendTo: modal.formElements.formEl})
  modal.formElements.emailLabel = createElement({...formElementsData.emailLabel, appendTo: modal.formElements.emailWrapper})
  modal.formElements.emailInput = createElement({...formElementsData.emailInput, appendTo: modal.formElements.emailWrapper})

  // Company
  modal.formElements.companyWrapper = createElement({...formElementsData.companyWrapper, appendTo: modal.formElements.formEl})
  modal.formElements.companyLabel = createElement({...formElementsData.companyLabel, appendTo: modal.formElements.companyWrapper})
  modal.formElements.companyInput = createElement({...formElementsData.companyInput, appendTo: modal.formElements.companyWrapper})

  // Phone
  modal.formElements.phoneWrapper = createElement({...formElementsData.phoneWrapper, appendTo: modal.formElements.formEl})
  modal.formElements.phoneLabel = createElement({...formElementsData.phoneLabel, appendTo: modal.formElements.phoneWrapper})
  modal.formElements.phoneInput = createElement({...formElementsData.phoneInput, appendTo: modal.formElements.phoneWrapper})

  // Message
  modal.formElements.messageWrapper = createElement({...formElementsData.messageWrapper, appendTo: modal.formElements.formEl})
  modal.formElements.messageLabel = createElement({...formElementsData.messageLabel, appendTo: modal.formElements.messageWrapper})
  modal.formElements.messageInput = createElement({...formElementsData.messageInput, appendTo: modal.formElements.messageWrapper})

  // Consent
  modal.formElements.consentWrapper = createElement({...formElementsData.consentWrapper, appendTo: modal.formElements.formEl})
  modal.formElements.consentInput = createElement({...formElementsData.consentInput, appendTo: modal.formElements.consentWrapper})
  modal.formElements.consentLabel = createElement({...formElementsData.consentLabel, appendTo: modal.formElements.consentWrapper})

  // Submit button
  modal.formElements.submitBtnWrapper = createElement({...formElementsData.submitBtnWrapper, appendTo: modal.formElements.formEl})
  modal.formElements.submitBtn = createElement({...formElementsData.submitBtn, appendTo: modal.formElements.submitBtnWrapper})
  modal.formElements.submitIcon = createElement({...formElementsData.submitIcon, appendTo: modal.formElements.submitBtn})
}

//Event listeners
openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

// MAP JS
var map = new jsVectorMap({
  map: 'worldmerc',
  selector: '.map__root',
  zoomButtons : false,
  zoomOnScroll : false,
  markersSelectable: false,

  onRegionTooltipShow(event, tooltip, code) {
    // Hide for all
    event.preventDefault()
  },

  regionStyle: {
    initial: {
      fill: 'rgba(150, 209, 254, 0.2)',
      // stroke: 'rgba(150, 209, 254, 0.2)',
      // strokeWidth: 1
    },
    hover: {
      fillOpacity: 1
    }
  },

  markers: cities,
  markerStyle: {
    initial: {
      stroke: '#96D1FE',
      strokeWidth: 8,
      strokeOpacity: '0.4',
      fill: '#96D1FE',
      r: '4'
    },
    selected: {
      fill: '#ff525d'
    }
  },
  onLoaded(map) {
    window.addEventListener('resize', () => {
      map.updateSize()
    })
  }
})

const mapEl = document.querySelector('.map')
const mapRoot = document.querySelector('.map__root')
const regions = document.querySelectorAll('.map__region')
const reviews = document.querySelector('.map__reviews')

regions.forEach(region => {
  const regionData = region.dataset.region
  region.addEventListener('click', () => {
    mapEl.dataset.activeRegion = regionData
  })
})

// Draggable reviews
const handleReviewsMouseDown = (e) => {
  pos = {
    left: reviews.scrollLeft,
    x: e.clientX
  }

  document.addEventListener('mousemove', handleReviewsMouseMove);
  document.addEventListener('mouseup', handleReviewsMouseUp);
}

const handleReviewsMouseMove = (e) => {
  const dx = e.clientX - pos.x;
  reviews.scrollLeft = pos.left - dx;
}

const handleReviewsMouseUp = (e) => {
  document.removeEventListener('mousemove', handleReviewsMouseMove);
  document.removeEventListener('mouseup', handleReviewsMouseUp);
}

const updateMapContainerSize = () => {
    mapRoot.style.height = `${mapRoot.clientWidth / 2}px`
}

updateMapContainerSize()

reviews.addEventListener('mousedown', handleReviewsMouseDown)
window.addEventListener('resize', updateMapContainerSize)
