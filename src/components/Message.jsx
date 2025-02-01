import ReactMarkdown from "react-markdown";

export default function Message({ message }) {
  const classes = message.role == "user" ? "" : "";

  return (
    <>
      <div className={`${classes} flex w-full items-stretch gap-3 text-wrap`}>
        <span className="mt-1 text-3xl">
          {message.role == "user" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="6" r="4" />
                <path
                  d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
                  opacity="0.5"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-full bg-[#FF0033] p-1 text-stone-100"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                color="currentColor"
              >
                <path d="M12 4.5a2.5 2.5 0 0 0-5 0a3 3 0 0 0-2.567 4.554a3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 7 19.5a2.5 2.5 0 0 0 5-.001" />
                <path d="M12 19.5a2.5 2.5 0 0 0 5 0a3 3 0 0 0 2.567-4.553a3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 0 0-5-.001" />
                <path d="M10.487 7.001V8.98M7 10.501h2.052m5.971 0h2.052m-2.052 2.974h2.052M7 13.475h2.052m1.435 1.545V17m3.025-1.98V17m-.009-10v1.98m-3.45 5.989h3.971a1 1 0 0 0 1-1V9.98a1 1 0 0 0-1-1h-3.971a1 1 0 0 0-1 1v3.989a1 1 0 0 0 1 1" />
              </g>
            </svg>
          )}
        </span>
        <div>
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
