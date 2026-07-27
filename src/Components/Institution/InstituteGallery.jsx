import { useState, useEffect } from "react";
import {
  FaImage,
  FaVideo,
  FaDownload,
  FaFileAlt,
  FaPlay,
  FaFilePdf,
  FaChartLine,
  FaTimes,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function InstituteGallery({ institutionId }) {
  const [tab, setTab] = useState(0);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      if (!institutionId) {
        setResources([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
        const res = await fetch(`${baseUrl}/institution/gallery-resource/getall`);
        if (res.ok) {
          const json = await res.json();
          const data = Array.isArray(json) ? json : (Array.isArray(json.data) ? json.data : []);
          // Filter by institutionId
          const filtered = data.filter(item => {
            const instId = item.institutionId?._id || item.institutionId;
            return instId === institutionId;
          });
          setResources(filtered);
        } else {
          setResources([]);
        }
      } catch (error) {
        console.error("Failed to fetch gallery and resources:", error);
        setResources([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [institutionId]);

  const getAssetUrl = (fileNameOrPath) => {
    if (!fileNameOrPath) return '';
    let clean = fileNameOrPath.replace(/^(public[/\\]uploads[/\\])/i, '');
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
    const serverUrl = apiUrl.replace(/\/api\/?$/, '');
    return `${serverUrl}/public/uploads/${clean.replace(/\\/g, '/')}`;
  };

  const getEmbedUrl = (url) => {
    if (!url) return '';
    // YouTube
    const ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const ytMatch = url.match(ytRegExp);
    if (ytMatch && ytMatch[2].length === 11) {
      return `https://www.youtube.com/embed/${ytMatch[2]}`;
    }
    // Vimeo
    const vimeoRegExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegExp);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
    return url;
  };

  const isDirectVideo = (url) => {
    return url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg'));
  };

  const getVideoThumbnail = (url) => {
    if (!url) return '';
    // YouTube
    const ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const ytMatch = url.match(ytRegExp);
    if (ytMatch && ytMatch[2].length === 11) {
      return `https://img.youtube.com/vi/${ytMatch[2]}/hqdefault.jpg`;
    }
    // Vimeo
    const vimeoRegExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegExp);
    if (vimeoMatch) {
      // Return a higher quality Vimeo placeholder link or let it fallback
      return `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
    }
    return '';
  };

  // Group items by category
  const photos = resources.filter(item => item.galleryType === "photos");
  const videos = resources.filter(item => item.galleryType === "videos");
  const downloads = resources.filter(item => item.galleryType === "downloads");
  const reports = resources.filter(item => item.galleryType === "reports");

  const tabs = [
    { label: "Photos", icon: <FaImage />, count: photos.length },
    { label: "Videos", icon: <FaVideo />, count: videos.length },
    { label: "Downloads", icon: <FaDownload />, count: downloads.length },
    { label: "Reports", icon: <FaFileAlt />, count: reports.length },
  ];

  if (!institutionId) return null;
  if (!loading && resources.length === 0) return null;

  return (
    <>
      <section className="dept-gallery" style={{ backgroundColor: "#f8f6f1" }}>
        <div className="dept-gallery-inner">
          <h2 className="section-title">
            Gallery & <span style={{ color: "#c8952a" }}>Resources</span>
          </h2>

          {/* Tabs */}
          <div className="gallery-tabs">
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`gallery-tab ${tab === i ? "active" : ""}`}
                onClick={() => setTab(i)}
              >
                {t.icon} {t.label} 
                <span style={{ 
                  fontSize: '11px', 
                  backgroundColor: tab === i ? '#c8952a' : '#e7e5e0', 
                  color: tab === i ? 'white' : '#6b7280', 
                  padding: '2px 6px', 
                  borderRadius: '10px', 
                  marginLeft: '4px',
                  fontWeight: 'normal'
                }}>
                  {t.count}
                </span>
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ display: "flex", justifyContent: "center", padding: "40px", color: "var(--gray)" }}>
              Loading resources...
            </div>
          ) : (
            <>
              {/* Photos */}
              {tab === 0 && (
                <div className="photo-grid">
                  {photos.length > 0 ? (
                    photos.map((item) => (
                      <div 
                        key={item._id} 
                        className="photo-item" 
                        onClick={() => setSelectedPhoto(item)}
                        style={{ 
                          backgroundImage: `url(${getAssetUrl(item.galleryImage)})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                          padding: '10px 15px',
                          color: 'white',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}>
                          {item.title}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ gridColumn: 'span 4', textAlign: 'center', padding: '40px', color: 'var(--gray)' }}>
                      No photos uploaded for this department.
                    </div>
                  )}
                </div>
              )}

              {/* Videos */}
              {tab === 1 && (
                <div className="video-grid">
                  {videos.length > 0 ? (
                    videos.map((v) => (
                      <div 
                        key={v._id} 
                        onClick={() => setSelectedVideo(v)}
                        className="video-card"
                        style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        <div 
                          className="video-thumb" 
                          style={{ 
                            position: 'relative',
                            backgroundImage: getVideoThumbnail(v.videoLink) ? `url(${getVideoThumbnail(v.videoLink)})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: 'var(--navy)'
                          }}
                        >
                          <div className="video-play">
                            <FaPlay />
                          </div>
                        </div>
                        <div className="video-body">
                          <div className="dl-title" style={{ color: 'var(--navy)', marginBottom: '4px' }}>{v.title}</div>
                          <div className="dl-meta" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {v.description} <FaPlay size={10} style={{ marginLeft: 'auto', color: 'var(--gold)' }} />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '40px', color: 'var(--gray)' }}>
                      No videos linked for this department.
                    </div>
                  )}
                </div>
              )}

              {/* Downloads */}
              {tab === 2 && (
                <div className="downloads-grid">
                  {downloads.length > 0 ? (
                    downloads.map((d) => (
                      <a 
                        key={d._id} 
                        href={getAssetUrl(d.pdfFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-item"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <FaFilePdf className="dl-icon" style={{ fontSize: '24px', flexShrink: 0 }} />
                        <div style={{ flexGrow: 1 }}>
                          <div className="dl-title" style={{ color: 'var(--navy)' }}>{d.title}</div>
                          <div className="dl-meta">{d.description}</div>
                        </div>
                        <FaDownload style={{ color: 'var(--gold)', marginLeft: '10px' }} />
                      </a>
                    ))
                  ) : (
                    <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '40px', color: 'var(--gray)' }}>
                      No PDF download resources available.
                    </div>
                  )}
                </div>
              )}

              {/* Reports */}
              {tab === 3 && (
                <div className="downloads-grid">
                  {reports.length > 0 ? (
                    reports.map((r) => (
                      <a 
                        key={r._id} 
                        href={getAssetUrl(r.pdfFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-item"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <FaChartLine className="dl-icon" style={{ fontSize: '24px', flexShrink: 0 }} />
                        <div style={{ flexGrow: 1 }}>
                          <div className="dl-title" style={{ color: 'var(--navy)' }}>{r.title}</div>
                          <div className="dl-meta">{r.description}</div>
                        </div>
                        <FaDownload style={{ color: 'var(--gold)', marginLeft: '10px' }} />
                      </a>
                    ))
                  ) : (
                    <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '40px', color: 'var(--gray)' }}>
                      No reports available.
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Premium Lightbox Modal for Photo viewing */}
      {selectedPhoto && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '5%',
              maxHeight: '70%',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
            >
              <FaTimes size={18} />
            </button>
            <img 
              src={getAssetUrl(selectedPhoto.galleryImage)} 
              alt={selectedPhoto.title} 
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain'
              }}
            />
            <div style={{ padding: '20px 24px', borderTop: '1px solid #f3f4f6' }}>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: 'var(--navy)' }}>{selectedPhoto.title}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--gray)' }}>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Premium Video Modal Player */}
      {selectedVideo && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
            >
              <FaTimes size={18} />
            </button>
            <div style={{ backgroundColor: 'black', width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
              {isDirectVideo(selectedVideo.videoLink) ? (
                <video 
                  src={selectedVideo.videoLink} 
                  controls 
                  autoPlay 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              ) : (
                <iframe
                  src={getEmbedUrl(selectedVideo.videoLink)}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                ></iframe>
              )}
            </div>
            <div style={{ padding: '20px 24px', borderTop: '1px solid #f3f4f6' }}>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: 'var(--navy)' }}>{selectedVideo.title}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--gray)' }}>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
