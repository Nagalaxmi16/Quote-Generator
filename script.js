const quotes = [
    {
      text: "When you want something, all the universe conspires in helping you to achieve it."
    },
    {
      text: "Your comeback is going to be epic. Watch how god does it."      
    },
    {
      text: "If everything seems dark, look again, you may be the light."     
    },
    {   
        text: "Your 'normal' day is someone's dream, so be thankful everyday."      
    },
    {
      text: "Maybe the journey isn't about becoming anything. Maybe it's about unbecoming everything that isnt't really you, so that you can be who you were meant be in the first place"  
    },
    {
      text: "Nothing is more beautiful than the smile that has struggled through the tears." 
    }
  ];
  
  function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").textContent = `"${quote.text}"`;
  }  
  