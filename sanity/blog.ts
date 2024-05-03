/* eslint-disable import/no-anonymous-default-export */

import {uuid} from '@sanity/uuid'

const id = uuid()

export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        {
            name: "id",
            title: "ID",
            type: "string",
          },
          {
            name: 'createdAt', // Automatically generated field
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(), 
            readOnly: true, // Make it read-only to prevent modification
          },
      {
        name: "authorImage",
        title: "Author Image",
        type: "image",
        options: {
          hotspot: true,
          svg: true,
          accept: "image/svg+xml"
           // Optional: Enables hotspot coordinates for cropping
        },
      },
      {
        name: "authorName",
        title: "Author Name",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "authorJobRole",
        title: "Author Job Role",
        type: "string"
      },
      {
        name: "companyName",
        title: "Company Name",
        type: "string"
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
    //   {
    //     name: "type",
    //     title: "Category",
    //     type: "reference",
    //     to: [{type: "category"}],
    //   },
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
          svg: true,
          accept: "image/svg+xml"
           // Optional: Enables hotspot coordinates for cropping
        },
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      
      {
        name: "description",
        title: "Description",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: "headline",
        title: "Headline",
        type: "string"
      },
      {
        name: "quote",
        title: "Quote",
        type: "string"
      },
      {
        name: "quoteAuthor",
        title: "Quote Author",
        type: "string"
      },
      {
        name: "footerDescription",
        title: "Footer Description",
        type: "string"
      }
    ]
  }
  