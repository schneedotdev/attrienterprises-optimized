import Image from './Image'

export default function Main() {
  return (
    <main>
      <div className="background-design">
        <Image
          id="logo-main"
          imgSrc="./assets/images/attri-logo-md.png"
          altText="Attri Enterprises Inc. logo"
        />
        <h1 id="title">Attri Enterprises</h1>
        <span id="title-description">Roofing General Contractors</span>
        <a id="learn-more" href="#profile">
          About Us
        </a>
      </div>
    </main>
  )
}
