import { escapeHtml } from "./dom.js";

export function renderCards(cards, ui) {
  return cards.map((card, index) => `
    <article class="card" data-card="${index}">
      <p class="card-label">${escapeHtml(card.label)}</p>
      <p class="card-body">${escapeHtml(card.body)}</p>
      <button class="card-action" type="button" data-source-index="${index}">
        ${escapeHtml(card.actionLabel || ui.sourceButtonPrefix)}
      </button>
      <p class="card-source" data-source-for="${index}" hidden>${escapeHtml(card.actionText || "")}</p>
    </article>
  `).join("");
}

export function wireCards(root, cards) {
  root.querySelectorAll("[data-source-index]").forEach(button => {
    button.addEventListener("click", () => {
      const index = button.dataset.sourceIndex;
      const source = root.querySelector(`[data-source-for="${index}"]`);
      if (!source) return;
      const willShow = source.hidden;
      source.hidden = !willShow;
      button.setAttribute("aria-expanded", String(willShow));
    });
  });
}
