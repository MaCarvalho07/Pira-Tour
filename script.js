// Navigation functionality
        document.addEventListener("DOMContentLoaded", () => {
          const navItems = document.querySelectorAll(".nav-item")

          navItems.forEach((item) => {
            item.addEventListener("click", function () {
              // Remove active class from all items
              navItems.forEach((nav) => nav.classList.remove("active"))

              // Add active class to clicked item
              this.classList.add("active")

              // Get the page data attribute
              const page = this.getAttribute("data-page")

              // Here you could add logic to show/hide different sections
              // or navigate to different pages
              console.log("Navigating to:", page)
            })
          })

          // Add smooth scrolling for featured cards
          const featuredCards = document.querySelector(".featured-cards")
          if (featuredCards) {
            featuredCards.style.scrollBehavior = "smooth"
          }

          // Add click handlers for cards (optional interactivity)
          const cards = document.querySelectorAll(".featured-card, .news-card, .weather-card, .transport-card, .curiosity-card")

          cards.forEach((card) => {
            card.addEventListener("click", function () {
              // Add a subtle click effect
              this.style.transform = "scale(0.98)"
              setTimeout(() => {
                this.style.transform = "scale(1)"
              }, 150)
            })
          })

          // Add hover effects for interactive elements
          const interactiveElements = document.querySelectorAll(".section-header, .nav-item")

          interactiveElements.forEach((element) => {
            element.addEventListener("mouseenter", function () {
              this.style.cursor = "pointer"
            })
          })
        })

        // Utility function to format dates (if needed for dynamic content)
        function formatDate(date) {
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }
          return new Date(date).toLocaleDateString("pt-BR", options)
        }

        // Function to simulate loading states (optional)
        function showLoading(element) {
          element.style.opacity = "0.6"
          element.style.pointerEvents = "none"
        }

        function hideLoading(element) {
          element.style.opacity = "1"
          element.style.pointerEvents = "auto"
        }

        // Add touch feedback for mobile devices
        document.addEventListener("touchstart", () => {}, { passive: true })