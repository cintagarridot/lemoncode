
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

import { mapProjectFromApiToVm, mapEmployeeSummaryFromApiToVm, mapEmployeeSummaryListFromApiToVm }  from './project.mapper';

describe('Project Mapper mapProjectFromApiToVm Specs', () => {

  it('should return empty Project Object when feeding undefined project', () => {
    const project = undefined;

    const expectedResult = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    }

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(expectedResult);
  });

  it('should return empty Project Object when feeding null project', () => {
    const project = null;

    const expectedResult = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    }

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(expectedResult);
  });
   
  it('should return the object mapped from api-model to view-model', () => {
    const project: apiModel.Project = {
      id: '1',
      name: 'Test',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        {
          id: '1',
          employeeName: 'Daniel Perez',
          isAssigned: true,
        },
      ]
    }

    const result: viewModel.Project = mapProjectFromApiToVm(project);

    const expectedResult: viewModel.Project = 
      {
          id: '1',
          name: 'Test',
          externalId: '1234',
          comments: 'Comentario',
          isActive: true,
          employees: [
              {
                  id: '1',
                  employeeName: 'Daniel Perez',
                  isAssigned: true,
              },
          ]
      };
    
    expect(result).toEqual(expectedResult);
  });

  
});

describe('Project Mapper mapEmployeeSummaryFromApiToVm Specs', () => {
  it('should return empty Employee Summary Object when feeding undefined emmployeeSummary', () => {
    const employeeSummary = undefined;

    const expectedResult = {};

    const result = mapEmployeeSummaryFromApiToVm(employeeSummary);

    expect(result).toEqual(expectedResult);
  });

  it('should return empty Employee Summary Object when feeding null emmployeeSummary', () => {
    const employeeSummary = null;

    const expectedResult = {};

    const result = mapEmployeeSummaryFromApiToVm(employeeSummary);

    expect(result).toEqual(expectedResult);
  });

  it('should return the object mapped from api-model to view-model', () => {
    const employeeSummary: apiModel.EmployeeSummary = {
      id: '1',
      employeeName: 'Daniel Perez',
      isAssigned: true,
    };

    const result: viewModel.EmployeeSummary = mapEmployeeSummaryFromApiToVm(employeeSummary);

    const expectedResult: viewModel.EmployeeSummary = {
        id: '1',
        employeeName: 'Daniel Perez',
        isAssigned: true,
    };
          
    expect(result).toEqual(expectedResult);
  });  
});

describe('Project Mapper mapEmployeeSummaryListFromApiToVm Specs', () => {
  it('should return empty Employee Summary Object when feeding undefined emmployeeSummary', () => {
    const employeeSummary = undefined;

    const expectedResult = [];

    const result = mapEmployeeSummaryListFromApiToVm(employeeSummary);

    expect(result).toEqual(expectedResult);
  });

  it('should return empty Employee Summary Object when feeding null emmployeeSummary', () => {
    const employeeSummary = null;

    const expectedResult = [];

    const result = mapEmployeeSummaryListFromApiToVm(employeeSummary);

    expect(result).toEqual(expectedResult);
  });

  it('should return the object mapped from api-model to view-model', () => {
    const employeeSummary: apiModel.EmployeeSummary[] = [
      {
      id: '1',
      employeeName: 'Daniel Perez',
      isAssigned: true,
      },
      {
        id: '2',
        employeeName: 'Maria Sanchez',
        isAssigned: true,
      },
    ];

    const result: viewModel.EmployeeSummary[] = mapEmployeeSummaryListFromApiToVm(employeeSummary);

    const expectedResult: viewModel.EmployeeSummary[] = [
      {
      id: '1',
      employeeName: 'Daniel Perez',
      isAssigned: true,
      },
      {
        id: '2',
        employeeName: 'Maria Sanchez',
        isAssigned: true,
      },
    ];
          
    expect(result).toEqual(expectedResult);
  });  
});