# RatingsReviews
  State: Current Item Reviews List, Current Item Rating Metadata
  Props: Product Id, Product Name
  Functionality: Sorting dropdown menu, More Reviews button lengthens Review List, Add a Review button pops-up New Review modal
  Content: Title with product name

  Children(2):

#   1) Ratings
      State: none
      Props: Current Item Metadata
      Functionality: none
      Content: none (child components)

      Children(3):

##      1) SummaryRec
          State: none
          Props: Composite Rating metadata
          Functionality: none
          Content: Composite Rating, Star Rating

          Children: none

##      2) RatingBreakdown
          State: none
          Props: Rating metadata
          Functionality: Clicking a rating sorts and re-renders Reviews List
          Content: Rating breakdown gauges

          Children: none

##      3) ProductBreakdown
          State: none
          Props: Product Breakdown metadata
          Functionality: none
          Content: Product Characteristics Slider Visuals

          Children: none



#   2) Reviews
      State: none
      Props: Current Item Reviews List
      Functionality: Scrollable list (mapped reviews)
      Content: Number of reviews above Review List

      Children(2):

##      1) ReviewList
          State: Current Filter
          Props: Current Item Reviews List
          Functionality: Scrollable List
          Content: children (mapped)

          Children(1):

###         1) ReviewTile
              State: none
              Props: Individual review data
              Functionality: clicking Helpful or Report actions
              Content: User Rating, Timestamp, Review Summary, Review Body, Helpful count

              Children(3):

####            1) RatingTimestamp
                  State: none
                  Props: User Rating, Timestamp
                  Functionality: none
                  Content: user rating, timestamp

                  Children: none

####            2) ReviewBody
                  State: none
                  Props: Review Summary, Review body
                  Functionality: none
                  Content: Review summary, Review body

                  Children: none

####            3) Helpfulness
                  State: none
                  Props: Helpful Count
                  Functionality: Clicking Yes or No increases that object's count (one per user)
                  Content: Yes/No Helpful counts

                  Children: none

##      2) NewReview
          State: none
          Props: Product Name
          Functionality: Clicking Submit will send the form data to the server with a POST request and
            update the current reviews page to show the new review
          Content: Product Name, Title

          Children(3):

###         1) RatingsChars
              State: none
              Props: none
              Functionality: User Rating selection (radio buttons), Product Breakdown Fields (radio buttons)
              Content: Labels of above info being collected

              Children: none

###         2) BodyInfo
              State: none
              Props: none
              Functionality: Text input fields for User Info, Review Summary, and Review Body
              Content: Input field labels

              Children: none

###         3) MediaUpload
              State: none
              Props: none
              Functionality: Allow image uploads (up to five) **check file types
              Content: Add image button (functionality of this??)

              Children: none