import React, { useState, useEffect } from "react";
import { fetchNews } from "../services/apiService";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  const categories = [
    "All",
    "What's New",
    "Articles",
    "Whitepapers",
    "Case Studies",
    "Strategy Papers",
    "Videos",
    "Newsletter",
  ];

  const filteredItems = news.filter((item) => {
    const matchesSearch = item.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeFilter === "All" || item.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="latest-news-section bg-white">
      <div className="container">
        <div className="row mb-5 align-items-center g-3">
          <div className="col-lg-6 col-md-12">
            <div className="search-box-custom">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                className="form-control search-input-new"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end">
            <div className="category-select-wrapper">
              <select
                className="form-select category-dropdown-new"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="latest-filters d-none d-md-flex flex-wrap justify-content-start mb-5">
          {categories.map((filter) => (
            <button
              key={filter}
              className={`btn filter-btn me-2 mb-2 ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Fetching latest updates...</p>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="row g-4 mb-5">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-6 col-md-6 col-lg-4">
                <div className="card news-card-new">
                  <div className="news-card-img-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-card-body">
                    <h5 className="news-card-title">{item.title}</h5>
                    <div className="news-meta-info">
                      <span className="price-tag-new">
                        {item.price || "Free"}
                      </span>
                      <span className="meta-dot"></span>
                      <span>{item.date || "07 Apr 2026"}</span>
                    </div>
                    <div className="mt-auto">
                      <span className="news-tag-pill">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5 bg-light rounded-4">
            <i className="fas fa-info-circle fs-1 text-muted mb-3"></i>
            <h4 className="text-muted">Oops! No results found.</h4>
            <p className="text-muted small">
              Try adjusting your filter or search criteria.
            </p>
            <button
              className="btn btn-outline-primary btn-sm mt-3"
              onClick={() => {
                setActiveFilter("All");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        <div className="d-flex justify-content-start">
          <a href="#" className="btn btn-see-all-teal">
            See all
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
