import { useState } from "react";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {tabs && (
        <>
          <ul className="nav nav-tabs " role="tablist">
            {tabs.map(({ title, key }, i) => {
              const isActive = i === activeTab;
              const activeClass = isActive ? "active" : "";
              return (
                <li
                  key={key}
                  className="nav-item flex-fill"
                  role="presentation"
                >
                  <button
                    className={
                      "nav-link text-uppercase py-4 w-100 " + activeClass
                    }
                    id={`${key}-tab-${i + 1}`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${key}-${i + 1}`}
                    type="button"
                    role="tab"
                    aria-controls={`${key}-${i + 1}`}
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveTab(i);
                    }}
                  >
                    {title}
                  </button>
                </li>
              );
            })}
          </ul>
          <div
            className="tab-content border border-primary border-top-0 p-5"
            id="myTabContent"
          >
            {tabs.map(({ content, key }, i) => {
              const isActive = i === activeTab;
              const activeClass = isActive ? "show active" : "";
              return (
                <div
                  key={key}
                  className={"tab-pane fade" + activeClass}
                  id={`#${key}-${i + 1}`}
                  role="tabpanel"
                  aria-labelledby={`#${key}-tab-${i + 1}`}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Tabs;
