import './InvitationCard.css'

export default function InvitationCard() {
  return (
    <div className="card">
      <div className="card-corner card-corner--tl">❀</div>
      <div className="card-corner card-corner--tr">❀</div>
      <div className="card-corner card-corner--bl">❀</div>
      <div className="card-corner card-corner--br">❀</div>

      <div className="lotus-wrap reveal" style={{ '--d': '0.05s' }}>
        <img src="/lotus.png" alt="ॐ कमल" className="lotus" />
      </div>

      <div className="mantra-title reveal" style={{ '--d': '0.2s' }}>
        श्री गणेशाय नमः
      </div>

      <div className="mantra reveal" style={{ '--d': '0.35s' }}>
        वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
        <br />
        निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
      </div>

      <div className="divider reveal" style={{ '--d': '0.45s' }}>
        <span>❁</span>
      </div>

      <h1 className="heading reveal" style={{ '--d': '0.55s' }}>
        🏡 गृह प्रवेश समारोह 🏡
      </h1>

      <div className="family reveal" style={{ '--d': '0.7s' }}>
        द्विवेदी परिवार
      </div>

      <p className="invite reveal" style={{ '--d': '0.85s' }}>
        आपको एवं आपके समस्त परिवार को हमारे {' '}
        <strong>गृह प्रवेश एवं पूजन समारोह एवं सुंदरकांड पाठ</strong> में सादर आमंत्रित करता है।
        <br />
        <br />
        आपकी स्नेहमयी उपस्थिति हमारे लिए अत्यंत हर्ष एवं सौभाग्य का विषय होगी।
      </p>

      <div className="details reveal" style={{ '--d': '1s' }}>
        <div className="detail-row">
          📅 <b>दिनांक :</b> 27 जून 2026 (शनिवार)
        </div>
        <div className="detail-row">
          🕥 <b>पूजन प्रारम्भ :</b> प्रातः 10:30 बजे
        </div>
        <div className="detail-row"> <b>सुंदरकांड पाठ</b></div>
        {/* <div className="detail-row">🙏 प्रसाद एवं भोजन</div> */}
      </div>

      <div className="footer reveal" style={{ '--d': '1.15s' }}>
        सादर आमंत्रण
        <br />
        <br />
        <strong>द्विवेदी परिवार</strong>
      </div>

      <div className="address reveal" style={{ '--d': '1.3s' }}>
        🏠 <b>पता :</b> MIG B1 Flat No. 906, 9th floor, Kabir Nagar,
        <br />
        Devpur Para, Lucknow, 226011
      </div>

      <a
        className="btn reveal"
        style={{ '--d': '1.45s' }}
        href="https://maps.app.goo.gl/ux7SV5UxjwYd9BDs9"
        target="_blank"
        rel="noreferrer"
      >
        📍 कार्यक्रम स्थल (Google Maps)
      </a>

      <div className="note reveal" style={{ '--d': '1.6s' }}>
        कृपया सपरिवार पधारकर हमें अनुग्रहित करें।
      </div>
    </div>
  )
}
