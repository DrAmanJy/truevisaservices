export const CONTACT_INFO = {
  phone: {
    display: "+91 73473 51519",
    raw: "+917347351519",
    link: "tel:+917347351519",
  },
  whatsapp: {
    display: "+91 73473 51519",
    raw: "+917347351519",
    message: "Hello, I would like to know more about your visa services.",
    // Generates the proper wa.me link
    get link() {
      return `https://wa.me/${this.raw.replace('+', '')}?text=${encodeURIComponent(this.message)}`;
    }
  },
  email: {
    display: "Info@truevisaservices.in",
    link: "mailto:Info@truevisaservices.in",
  },
  address: {
    display: "SCO 42, 1st Floor, Sector-31D, Chandigarh, 160030, India",
    street: "SCO 42, 1st Floor, Sector-31D",
    city: "Chandigarh",
    postalCode: "160030",
    country: "IN",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.456059274401!2d76.77781775!3d30.704923649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec58f055b4ff%3A0x93f6a3bf6e10c28d!2sSECTOR-31D%2C%2031D%2C%20Sector%2031%2C%20Chandigarh%2C%20160030!5e1!3m2!1sen!2sin!4v1787827894554!5m2!1sen!2sin"
  }
};
